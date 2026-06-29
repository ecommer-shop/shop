import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, MoreThanOrEqual } from 'typeorm';
import { StoreDailyAnalytics } from '../entities/store-daily-analytics.entity';

interface AnalyticsFilter {
    channelId?: number | null;
    days: number;
}

@Injectable()
export class AnalyticsService {
    constructor(
        @InjectRepository(StoreDailyAnalytics)
        private repo: Repository<StoreDailyAnalytics>,
    ) {}

    private dateRange(days: number) {
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        const start = new Date();
        start.setDate(start.getDate() - days);
        start.setHours(0, 0, 0, 0);
        const previousStart = new Date(start);
        previousStart.setDate(previousStart.getDate() - days);
        return { start, end, previousStart };
    }

    async getAnalytics(filter: AnalyticsFilter) {
        const { start, end } = this.dateRange(filter.days);
        const where: any = {
            date: Between(start, end),
        };
        if (filter.channelId) {
            where.channelId = filter.channelId;
        }
        const rows = await this.repo.find({
            where,
            order: { date: 'ASC' },
        });
        return rows.map(r => ({
            date: r.date,
            totalOrders: r.totalOrders,
            totalRevenue: r.totalRevenue,
            totalUnits: r.totalUnits,
            avgOrderValue: r.avgOrderValue,
            newCustomers: r.newCustomers,
            productsSold: r.productsSold,
        }));
    }

    async getSummary(filter: AnalyticsFilter) {
        const { start, end, previousStart } = this.dateRange(filter.days);

        const whereCurrent: any = { date: Between(start, end) };
        const wherePrevious: any = { date: Between(previousStart, start) };
        if (filter.channelId) {
            whereCurrent.channelId = filter.channelId;
            wherePrevious.channelId = filter.channelId;
        }

        const [current, previous] = await Promise.all([
            this.repo.find({ where: whereCurrent }),
            this.repo.find({ where: wherePrevious }),
        ]);

        const sum = (rows: typeof current, key: keyof StoreDailyAnalytics) =>
            rows.reduce((acc, r) => acc + (r[key] as number), 0);

        const computeMetric = (key: keyof StoreDailyAnalytics, label: string, type: string) => {
            const cur = sum(current, key);
            const prev = sum(previous, key);
            const changePercent = prev > 0 ? Math.round(((cur - prev) / prev) * 1000) / 10 : cur > 0 ? 100 : 0;
            return { current: cur, previous: prev, changePercent, label, type };
        };

        const activeCount = current.length > 0
            ? new Set(current.map(r => r.channelId)).size
            : 0;
        const prevActiveCount = previous.length > 0
            ? new Set(previous.map(r => r.channelId)).size
            : 0;
        const activeChange = prevActiveCount > 0
            ? Math.round(((activeCount - prevActiveCount) / prevActiveCount) * 1000) / 10
            : activeCount > 0 ? 100 : 0;

        const totalRevenue = sum(current, 'totalRevenue');
        const activeStores = current.length > 0 ? new Set(current.map(r => r.channelId)).size : 0;
        const avgOrderValue = sum(current, 'totalOrders') > 0
            ? Math.round((totalRevenue / sum(current, 'totalOrders')) * 10) / 10
            : 0;

        return {
            totalRevenue: computeMetric('totalRevenue', 'Ingresos', 'currency'),
            totalOrders: computeMetric('totalOrders', 'Órdenes', 'number'),
            totalActiveStores: {
                current: activeCount,
                previous: prevActiveCount,
                changePercent: activeChange,
                label: 'Tiendas activas',
                type: 'number',
            },
            avgOrderValue: {
                current: avgOrderValue,
                previous: previous.length > 0
                    ? Math.round((sum(previous, 'totalRevenue') / sum(previous, 'totalOrders')) * 10) / 10
                    : 0,
                changePercent: avgOrderValue > 0 ? Math.round(((avgOrderValue - (previous.length > 0
                    ? Math.round((sum(previous, 'totalRevenue') / sum(previous, 'totalOrders')) * 10) / 10
                    : 0)) / avgOrderValue) * 1000) / 10 : 0,
                label: 'Ticket promedio',
                type: 'currency',
            },
            totalUnits: computeMetric('totalUnits', 'Unidades', 'number'),
            newCustomers: computeMetric('newCustomers', 'Clientes nuevos', 'number'),
        };
    }

    async getRanking(channelId?: number | null, by: string = 'revenue', limit: number = 10) {
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        const start = new Date();
        start.setFullYear(start.getFullYear() - 1);

        const where: any = { date: Between(start, end) };
        if (channelId) where.channelId = channelId;

        const rows = await this.repo
            .createQueryBuilder('sda')
            .select([
                'sda.channelId',
                'SUM(sda.totalRevenue) as revenue',
                'SUM(sda.totalOrders) as orders',
                'SUM(sda.totalUnits) as units',
            ])
            .where('sda.date BETWEEN :start AND :end', { start, end })
            .andWhere(channelId ? 'sda.channelId = :channelId' : '1=1', { channelId })
            .groupBy('sda.channelId')
            .orderBy(by === 'orders' ? 'orders' : 'revenue', 'DESC')
            .limit(limit)
            .getRawMany();

        const channelIds = rows.map(r => Number(r.sda_channelId));
        const names = channelIds.length > 0
            ? await this.repo.manager
                .createQueryBuilder()
                .select(['ch.id', 's.name', 'ch.code'])
                .from('channel', 'ch')
                .innerJoin('seller', 's', 's.id = ch."sellerId"')
                .where('ch.id IN (:...ids)', { ids: channelIds })
                .getRawMany()
            : [];

        const nameMap: Record<number, { name: string; code: string }> = {};
        for (const n of names) {
            nameMap[Number(n.ch_id)] = { name: n.s_name, code: n.ch_code };
        }

        return rows.map(r => ({
            storeId: String(r.sda_channelId),
            storeName: nameMap[Number(r.sda_channelId)]?.name ?? '—',
            channelCode: nameMap[Number(r.sda_channelId)]?.code ?? '—',
            totalRevenue: Number(r.revenue),
            totalOrders: Number(r.orders),
            totalUnits: Number(r.units),
        }));
    }

    async getStoreListForFilter() {
        const rows = await this.repo.manager
            .createQueryBuilder()
            .select(['ch.id', 's.name', 'ch.code'])
            .from('channel', 'ch')
            .innerJoin('seller', 's', 's.id = ch."sellerId"')
            .where('ch."sellerId" IS NOT NULL')
            .andWhere('s."deletedAt" IS NULL')
            .orderBy('s.name', 'ASC')
            .getRawMany();

        return rows.map(r => ({
            id: String(r.ch_id),
            storeName: r.s_name,
            channelCode: r.ch_code,
        }));
    }
}
