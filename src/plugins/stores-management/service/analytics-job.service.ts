import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from '@vendure/core';
import { StoreDailyAnalytics } from '../entities/store-daily-analytics.entity';
import { loggerCtx } from '../constants';

@Injectable()
export class AnalyticsJobService implements OnApplicationBootstrap {
    private intervalHandle: ReturnType<typeof setTimeout> | null = null;

    constructor(
        @InjectRepository(StoreDailyAnalytics)
        private repo: Repository<StoreDailyAnalytics>,
    ) {}

    async onApplicationBootstrap() {
        await this.computeDailySnapshot();
        this.scheduleNext();
    }

    private scheduleNext() {
        const msUntilMidnight = this.msUntilMidnight();
        this.intervalHandle = setTimeout(async () => {
            await this.computeDailySnapshot();
            this.scheduleNext();
        }, msUntilMidnight);
        Logger.info(`Next analytics snapshot in ${Math.round(msUntilMidnight / 60000)} minutes`, loggerCtx);
    }

    private msUntilMidnight(): number {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setDate(midnight.getDate() + 1);
        midnight.setHours(0, 0, 0, 0);
        return midnight.getTime() - now.getTime();
    }

    private async computeDailySnapshot() {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yStart = new Date(yesterday);
        yStart.setHours(0, 0, 0, 0);
        const yEnd = new Date(yesterday);
        yEnd.setHours(23, 59, 59, 999);

        Logger.info(`Computing daily analytics for ${yesterday.toISOString().slice(0, 10)}`, loggerCtx);

        try {
            const records = await this.buildAnalyticsRecords(yStart, yEnd);
            if (records.length === 0) {
                Logger.info(`No orders found for yesterday`, loggerCtx);
                return;
            }
            await this.upsertRecords(records);
            Logger.info(`Daily analytics computed: ${records.length} stores`, loggerCtx);
        } catch (e: any) {
            Logger.error(`Failed to compute daily analytics: ${e.message}`, loggerCtx);
        }
    }

    async backfill() {
        Logger.info(`Starting backfill for last 90 days`, loggerCtx);
        try {
            const end = new Date();
            end.setDate(end.getDate() - 1);
            end.setHours(23, 59, 59, 999);
            const start = new Date();
            start.setDate(start.getDate() - 90);
            start.setHours(0, 0, 0, 0);

            const records = await this.buildAnalyticsRecords(start, end);
            if (records.length === 0) {
                Logger.info(`No orders found for last 90 days`, loggerCtx);
                return 0;
            }
            const saved = await this.upsertRecords(records);
            Logger.info(`Backfill complete: ${records.length} rows`, loggerCtx);
            return records.length;
        } catch (e: any) {
            Logger.error(`Backfill failed: ${e.message}`, loggerCtx);
            throw e;
        }
    }

    private async buildAnalyticsRecords(startDate: Date, endDate: Date) {
        const rawData = await this.repo.manager
            .createQueryBuilder()
            .select('ol.sellerChannelId', 'channelId')
            .addSelect(`DATE_TRUNC('day', o."orderPlacedAt")::date`, 'date')
            .addSelect('COUNT(DISTINCT o.id)::int', 'totalOrders')
            .addSelect(
                `COALESCE(SUM(o."subTotalWithTax" + o."shippingWithTax"), 0)::int`,
                'totalRevenue',
            )
            .addSelect('COALESCE(SUM(ol.quantity), 0)::int', 'totalUnits')
            .addSelect(
                `CASE WHEN COUNT(DISTINCT o.id) > 0
                    THEN ROUND(COALESCE(SUM(o."subTotalWithTax" + o."shippingWithTax"), 0)::numeric
                        / NULLIF(COUNT(DISTINCT o.id), 0), 2)
                    ELSE 0 END`,
                'avgOrderValue',
            )
            .addSelect('COUNT(DISTINCT o."customerId")::int', 'newCustomers')
            .addSelect('COUNT(DISTINCT ol."productVariantId")::int', 'productsSold')
            .from('order_line', 'ol')
            .innerJoin('order', 'o', 'o.id = ol."orderId"')
            .where('o.state = :state', { state: 'PaymentSettled' })
            .andWhere('ol."sellerChannelId" IS NOT NULL')
            .andWhere('o."orderPlacedAt" >= :start', { start: startDate })
            .andWhere('o."orderPlacedAt" <= :end', { end: endDate })
            .groupBy('ol."sellerChannelId"')
            .addGroupBy(`DATE_TRUNC('day', o."orderPlacedAt")`)
            .getRawMany();

        return rawData.map(r => {
            const record = new StoreDailyAnalytics();
            record.channelId = Number(r.channelId);
            record.date = r.date;
            record.totalOrders = Number(r.totalOrders);
            record.totalRevenue = Number(r.totalRevenue);
            record.totalUnits = Number(r.totalUnits);
            record.avgOrderValue = Number(r.avgOrderValue);
            record.newCustomers = Number(r.newCustomers);
            record.productsSold = Number(r.productsSold);
            return record;
        });
    }

    private async upsertRecords(records: StoreDailyAnalytics[]) {
        if (records.length === 0) return;
        const qb = this.repo
            .createQueryBuilder()
            .insert()
            .into(StoreDailyAnalytics)
            .values(records)
            .orUpdate(
                [
                    'totalOrders',
                    'totalRevenue',
                    'totalUnits',
                    'avgOrderValue',
                    'newCustomers',
                    'productsSold',
                    'updatedAt',
                ],
                ['channelId', 'date'],
            );
        await qb.execute();
    }
}
