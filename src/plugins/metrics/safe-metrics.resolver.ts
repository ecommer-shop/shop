import { Args, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Order, Permission, RequestContext, TransactionalConnection } from '@vendure/core';
import { endOfDay, startOfMonth, sub } from 'date-fns';

interface CacheEntry {
    data: SummaryItem[];
    expires: number;
}

interface QueryRow {
    month: Date;
    order_count?: string;
    revenue?: string;
    aov?: string;
    units?: string;
}

interface SummaryItem {
    code: string;
    title: string;
    type: string;
    allowProductSelection: boolean;
    labels: string[];
    series: { name: string; values: number[] }[];
}

const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 5 * 60 * 1000;

@Resolver()
export class SafeMetricsResolver {
    constructor(private connection: TransactionalConnection) {}

    @Query()
    @Allow(Permission.ReadOrder)
    async advancedMetricSummaries(
        @Ctx() ctx: RequestContext,
        @Args('input') input?: { variantIds?: string[] },
    ) {
        const today = endOfDay(new Date());
        const startDate = startOfMonth(sub(today, { months: 13 }));
        const months = this.getMonthLabels(startDate, today);
        const channelId = ctx.channelId;
        const cacheKey = `${channelId}:${startDate.getTime()}:${today.getTime()}`;

        const cached = cache.get(cacheKey);
        if (cached && cached.expires > Date.now()) {
            return cached.data;
        }

        const repo = this.connection.rawConnection.getRepository(Order);

        const [orderRows, unitRows] = await Promise.all([
            repo
                .createQueryBuilder('o')
                .innerJoin('o.channels', 'ch')
                .select(`DATE_TRUNC('month', o."orderPlacedAt")`, 'month')
                .addSelect('COUNT(o.id)', 'order_count')
                .addSelect('SUM(o."subTotalWithTax" + o."shippingWithTax") / 100.0', 'revenue')
                .addSelect('AVG(o."subTotalWithTax" + o."shippingWithTax") / 100.0', 'aov')
                .where('ch.id = :channelId', { channelId })
                .andWhere('o."orderPlacedAt" BETWEEN :from AND :to', { from: startDate, to: today })
                .andWhere('o.state = :state', { state: 'PaymentSettled' })
                .groupBy(`DATE_TRUNC('month', o."orderPlacedAt")`)
                .orderBy(`DATE_TRUNC('month', o."orderPlacedAt")`, 'ASC')
                .getRawMany<QueryRow>(),
            repo
                .createQueryBuilder('o')
                .innerJoin('o.channels', 'ch')
                .leftJoin('o.lines', 'ol')
                .select(`DATE_TRUNC('month', o."orderPlacedAt")`, 'month')
                .addSelect('SUM(ol.quantity)', 'units')
                .where('ch.id = :channelId', { channelId })
                .andWhere('o."orderPlacedAt" BETWEEN :from AND :to', { from: startDate, to: today })
                .andWhere('o.state = :state', { state: 'PaymentSettled' })
                .groupBy(`DATE_TRUNC('month', o."orderPlacedAt")`)
                .orderBy(`DATE_TRUNC('month', o."orderPlacedAt")`, 'ASC')
                .getRawMany<QueryRow>(),
        ]);

        const pickValue = (rows: QueryRow[], field: keyof Omit<QueryRow, 'month'>) =>
            months.map(m => {
                const row = rows.find(r => {
                    const d = new Date(r.month);
                    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}` === m;
                });
                return row ? Number(row[field] ?? 0) : 0;
            });

        const result: SummaryItem[] = [
            {
                code: 'order-count',
                title: 'Órdenes',
                type: 'number',
                allowProductSelection: false,
                labels: months,
                series: [{ name: 'Órdenes', values: pickValue(orderRows, 'order_count') }],
            },
            {
                code: 'revenue-per-product',
                title: 'Ingresos',
                type: 'currency',
                allowProductSelection: true,
                labels: months,
                series: [{ name: 'Ingresos', values: pickValue(orderRows, 'revenue') }],
            },
            {
                code: 'aov',
                title: 'Valor promedio de orden',
                type: 'currency',
                allowProductSelection: false,
                labels: months,
                series: [{ name: 'AOV incl. tax', values: pickValue(orderRows, 'aov') }],
            },
            {
                code: 'units-sold',
                title: 'Unidades vendidas',
                type: 'number',
                allowProductSelection: true,
                labels: months,
                series: [{ name: 'Unidades', values: pickValue(unitRows, 'units') }],
            },
        ];

        cache.set(cacheKey, { data: result, expires: Date.now() + CACHE_TTL });

        return result;
    }

    private getMonthLabels(from: Date, to: Date): string[] {
        const labels: string[] = [];
        const d = new Date(from);
        while (d <= to) {
            labels.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
            d.setMonth(d.getMonth() + 1);
        }
        return labels;
    }
}
