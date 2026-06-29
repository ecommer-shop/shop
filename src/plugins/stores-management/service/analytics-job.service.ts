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
        // Run once on startup
        await this.computeDailySnapshot();
        // Schedule recurring run every 24h
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
        // Compute for yesterday (most recent complete day)
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yStr = yesterday.toISOString().slice(0, 10);

        Logger.info(`Computing daily analytics for ${yStr}`, loggerCtx);

        try {
            const result = await this.repo.query(
                `INSERT INTO store_daily_analytics ("channelId", date, "totalOrders", "totalRevenue", "totalUnits", "avgOrderValue", "newCustomers", "productsSold")
                 SELECT
                     ol."sellerChannelId",
                     $1::date,
                     COUNT(DISTINCT o.id)::int,
                     COALESCE(SUM(o.totalWithTax), 0)::int,
                     COALESCE(SUM(ol.quantity), 0)::int,
                     CASE WHEN COUNT(DISTINCT o.id) > 0
                         THEN ROUND(COALESCE(SUM(o.totalWithTax), 0)::numeric / NULLIF(COUNT(DISTINCT o.id), 0), 2)
                         ELSE 0 END,
                     COUNT(DISTINCT o."customerId")::int,
                     COUNT(DISTINCT ol."productVariantId")::int
                 FROM order_line ol
                 INNER JOIN "order" o ON o.id = ol."orderId"
                 WHERE o.state = 'PaymentSettled'
                   AND ol."sellerChannelId" IS NOT NULL
                   AND o."orderPlacedAt" >= $1::date
                   AND o."orderPlacedAt" < $1::date + INTERVAL '1 day'
                 GROUP BY ol."sellerChannelId"
                 ON CONFLICT ("channelId", date) DO UPDATE SET
                     "totalOrders" = EXCLUDED."totalOrders",
                     "totalRevenue" = EXCLUDED."totalRevenue",
                     "totalUnits" = EXCLUDED."totalUnits",
                     "avgOrderValue" = EXCLUDED."avgOrderValue",
                     "newCustomers" = EXCLUDED."newCustomers",
                     "productsSold" = EXCLUDED."productsSold",
                     "updatedAt" = NOW()`,
                [yStr],
            );

            const count = Array.isArray(result) ? result.length : 0;
            Logger.info(`Daily analytics computed for ${yStr}: ${count} stores`, loggerCtx);
        } catch (e: any) {
            Logger.error(`Failed to compute daily analytics: ${e.message}`, loggerCtx);
        }
    }

    async backfill() {
        Logger.info(`Starting backfill for last 90 days`, loggerCtx);
        try {
            const result = await this.repo.query(
                `INSERT INTO store_daily_analytics ("channelId", date, "totalOrders", "totalRevenue", "totalUnits", "avgOrderValue", "newCustomers", "productsSold")
                 SELECT
                     ol."sellerChannelId",
                     DATE_TRUNC('day', o."orderPlacedAt")::date,
                     COUNT(DISTINCT o.id)::int,
                     COALESCE(SUM(o.totalWithTax), 0)::int,
                     COALESCE(SUM(ol.quantity), 0)::int,
                     CASE WHEN COUNT(DISTINCT o.id) > 0
                         THEN ROUND(COALESCE(SUM(o.totalWithTax), 0)::numeric / NULLIF(COUNT(DISTINCT o.id), 0), 2)
                         ELSE 0 END,
                     COUNT(DISTINCT o."customerId")::int,
                     COUNT(DISTINCT ol."productVariantId")::int
                 FROM order_line ol
                 INNER JOIN "order" o ON o.id = ol."orderId"
                 WHERE o.state = 'PaymentSettled'
                   AND ol."sellerChannelId" IS NOT NULL
                   AND o."orderPlacedAt" >= CURRENT_DATE - INTERVAL '90 days'
                   AND o."orderPlacedAt" < CURRENT_DATE
                 GROUP BY ol."sellerChannelId", DATE_TRUNC('day', o."orderPlacedAt")
                 ON CONFLICT ("channelId", date) DO NOTHING`,
            );
            const count = Array.isArray(result) ? result.length : 0;
            Logger.info(`Backfill complete: ${count} rows inserted`, loggerCtx);
            return count;
        } catch (e: any) {
            Logger.error(`Backfill failed: ${e.message}`, loggerCtx);
            throw e;
        }
    }
}
