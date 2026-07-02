import { Args, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Order, Permission, RequestContext, TransactionalConnection } from '@vendure/core';
import { endOfDay, startOfMonth, sub } from 'date-fns';

interface CacheEntry<T> {
    data: T;
    expires: number;
}

interface MetricQueryRow {
    month: Date;
    order_count?: string;
    revenue?: string;
    aov?: string;
    units?: string;
}

interface TopProductRow {
    productVariantId: string;
    productName: string;
    sku: string;
    quantity: string;
    revenue: string;
}

interface SummaryItem {
    code: string;
    title: string;
    type: string;
    allowProductSelection: boolean;
    labels: string[];
    series: { name: string; values: number[] }[];
}

const cache = new Map<string, CacheEntry<any>>();
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
        const cacheKey = `${channelId}:${startDate.getTime()}:${today.getTime()}:metrics`;

        const cached = cache.get(cacheKey);
        if (cached && cached.expires > Date.now()) {
            return cached.data;
        }

        const repo = this.connection.rawConnection.getRepository(Order);

        const [orderRows, unitRows, customerRow, todayRow] = await Promise.all([
            repo
                .createQueryBuilder('o')
                .innerJoin('o.channels', 'ch')
                .select(`DATE_TRUNC('month', o."orderPlacedAt")`, 'month')
                .addSelect('COUNT(o.id)', 'order_count')
                .addSelect('SUM(o."subTotalWithTax" + o."shippingWithTax")', 'revenue')
                .addSelect('AVG(o."subTotalWithTax" + o."shippingWithTax")', 'aov')
                .where('ch.id = :channelId', { channelId })
                .andWhere('o."orderPlacedAt" BETWEEN :from AND :to', { from: startDate, to: today })
                .andWhere('o.state = :state', { state: 'PaymentSettled' })
                .groupBy(`DATE_TRUNC('month', o."orderPlacedAt")`)
                .orderBy(`DATE_TRUNC('month', o."orderPlacedAt")`, 'ASC')
                .getRawMany<MetricQueryRow>(),
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
                .getRawMany<MetricQueryRow>(),
            repo
                .createQueryBuilder('o')
                .innerJoin('o.channels', 'ch')
                .select('COUNT(DISTINCT o.customerId)', 'customer_count')
                .where('ch.id = :channelId', { channelId })
                .andWhere('o."orderPlacedAt" BETWEEN :from AND :to', { from: startDate, to: today })
                .andWhere('o.state = :state', { state: 'PaymentSettled' })
                .getRawOne(),
            repo
                .createQueryBuilder('o')
                .innerJoin('o.channels', 'ch')
                .select('COUNT(o.id)', 'today_count')
                .where('ch.id = :channelId', { channelId })
                .andWhere(`DATE_TRUNC('day', o."orderPlacedAt") = CURRENT_DATE`)
                .andWhere('o.state = :state', { state: 'PaymentSettled' })
                .getRawOne(),
        ]);

        const pickValue = (rows: MetricQueryRow[], field: keyof Omit<MetricQueryRow, 'month'>) =>
            months.map(m => {
                const row = rows.find(r => {
                    const d = new Date(r.month);
                    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}` === m;
                });
                return row ? Number(row[field] ?? 0) : 0;
            });

        const totalOrders = orderRows.reduce((s: number, r: any) => s + Number(r.order_count ?? 0), 0);
        const totalRevenue = orderRows.reduce((s: number, r: any) => s + Number(r.revenue ?? 0), 0);
        const totalUnits = unitRows.reduce((s: number, r: any) => s + Number(r.units ?? 0), 0);
        const customerCount = Number(customerRow?.customer_count ?? 0);
        const todayCount = Number(todayRow?.today_count ?? 0);
        const avgTicket = customerCount > 0 ? Math.round(totalRevenue / customerCount) : 0;
        const productsPerOrder = totalOrders > 0 ? Math.round((totalUnits / totalOrders) * 100) / 100 : 0;

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
            {
                code: 'active-customers',
                title: 'Clientes activos',
                type: 'number',
                allowProductSelection: false,
                labels: ['Total período'],
                series: [{ name: 'Clientes activos', values: [customerCount] }],
            },
            {
                code: 'avg-ticket',
                title: 'Ticket promedio',
                type: 'currency',
                allowProductSelection: false,
                labels: ['Total período'],
                series: [{ name: 'Ticket promedio', values: [avgTicket] }],
            },
            {
                code: 'today-orders',
                title: 'Órdenes hoy',
                type: 'number',
                allowProductSelection: false,
                labels: ['Hoy'],
                series: [{ name: 'Órdenes hoy', values: [todayCount] }],
            },
            {
                code: 'products-per-order',
                title: 'Prod. por orden',
                type: 'number',
                allowProductSelection: false,
                labels: ['Total período'],
                series: [{ name: 'Prod. por orden', values: [productsPerOrder] }],
            },
        ];

        cache.set(cacheKey, { data: result, expires: Date.now() + CACHE_TTL });

        return result;
    }

    @Query()
    @Allow(Permission.ReadOrder)
    async topProducts(
        @Ctx() ctx: RequestContext,
        @Args('input') input?: { variantIds?: string[] },
    ) {
        const today = endOfDay(new Date());
        const startDate = startOfMonth(sub(today, { months: 13 }));
        const channelId = ctx.channelId;
        const cacheKey = `${channelId}:${startDate.getTime()}:${today.getTime()}:top`;

        const cached = cache.get(cacheKey);
        if (cached && cached.expires > Date.now()) {
            return cached.data;
        }

        const repo = this.connection.rawConnection.getRepository(Order);

        const rows = await repo
            .createQueryBuilder('o')
            .innerJoin('o.channels', 'ch')
            .innerJoin('o.lines', 'ol')
            .innerJoin('ol.productVariant', 'pv')
            .innerJoin('pv.translations', 'pvt')
            .select('ol.productVariantId', 'productVariantId')
            .addSelect('pvt.name', 'productName')
            .addSelect('pv.sku', 'sku')
            .addSelect('SUM(ol.quantity)', 'quantity')
            .addSelect('SUM(ol.listPrice * ol.quantity)', 'revenue')
            .where('ch.id = :channelId', { channelId })
            .andWhere('o."orderPlacedAt" BETWEEN :from AND :to', { from: startDate, to: today })
            .andWhere('o.state = :state', { state: 'PaymentSettled' })
            .andWhere('pvt.languageCode = :lang', { lang: ctx.languageCode ?? 'es' })
            .groupBy('ol.productVariantId')
            .addGroupBy('pvt.name')
            .addGroupBy('pv.sku')
            .orderBy('revenue', 'DESC')
            .limit(10)
            .getRawMany<TopProductRow>();

        const result = rows.map(r => ({
            productVariantId: r.productVariantId,
            productName: r.productName,
            sku: r.sku,
            quantity: Number(r.quantity),
            revenue: Number(r.revenue),
        }));

        cache.set(cacheKey, { data: result, expires: Date.now() + CACHE_TTL });

        return result;
    }

    @Query()
    @Allow(Permission.ReadOrder)
    async orderStatusDistribution(@Ctx() ctx: RequestContext) {
        const channelId = ctx.channelId;
        const cacheKey = `${channelId}:status:dist`;

        const cached = cache.get(cacheKey);
        if (cached && cached.expires > Date.now()) {
            return cached.data;
        }

        const repo = this.connection.rawConnection.getRepository(Order);

        const rows = await repo
            .createQueryBuilder('o')
            .innerJoin('o.channels', 'ch')
            .select('o.state', 'state')
            .addSelect('COUNT(o.id)', 'count')
            .where('ch.id = :channelId', { channelId })
            .groupBy('o.state')
            .orderBy('count', 'DESC')
            .getRawMany();

        const total = rows.reduce((sum: number, r: any) => sum + Number(r.count), 0);
        const result = rows.map((r: any) => ({
            state: r.state,
            count: Number(r.count),
            percentage: total > 0 ? Math.round((Number(r.count) / total) * 100) : 0,
        }));

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
