import { Args, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Order, Permission, RequestContext, TransactionalConnection } from '@vendure/core';
import { endOfDay, startOfMonth, sub } from 'date-fns';

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

        const repo = this.connection.rawConnection.getRepository(Order);

        const revenue = await repo
            .createQueryBuilder('o')
            .innerJoin('o.channels', 'ch')
            .select(`DATE_TRUNC('month', o.orderPlacedAt)`, 'month')
            .addSelect('SUM(o.subTotalWithTax + o.shippingWithTax) / 100.0', 'value')
            .where('ch.id = :channelId', { channelId })
            .andWhere('o.orderPlacedAt BETWEEN :from AND :to', { from: startDate, to: today })
            .andWhere('o.state = :state', { state: 'PaymentSettled' })
            .groupBy(`DATE_TRUNC('month', o.orderPlacedAt)`)
            .orderBy(`DATE_TRUNC('month', o.orderPlacedAt)`, 'ASC')
            .getRawMany();

        const aov = await repo
            .createQueryBuilder('o')
            .innerJoin('o.channels', 'ch')
            .select(`DATE_TRUNC('month', o.orderPlacedAt)`, 'month')
            .addSelect('AVG(o.subTotalWithTax + o.shippingWithTax) / 100.0', 'value')
            .where('ch.id = :channelId', { channelId })
            .andWhere('o.orderPlacedAt BETWEEN :from AND :to', { from: startDate, to: today })
            .andWhere('o.state = :state', { state: 'PaymentSettled' })
            .groupBy(`DATE_TRUNC('month', o.orderPlacedAt)`)
            .orderBy(`DATE_TRUNC('month', o.orderPlacedAt)`, 'ASC')
            .getRawMany();

        const units = await repo
            .createQueryBuilder('o')
            .innerJoin('o.channels', 'ch')
            .innerJoin('o.lines', 'ol')
            .select(`DATE_TRUNC('month', o.orderPlacedAt)`, 'month')
            .addSelect('SUM(ol.quantity)', 'value')
            .where('ch.id = :channelId', { channelId })
            .andWhere('o.orderPlacedAt BETWEEN :from AND :to', { from: startDate, to: today })
            .andWhere('o.state = :state', { state: 'PaymentSettled' })
            .groupBy(`DATE_TRUNC('month', o.orderPlacedAt)`)
            .orderBy(`DATE_TRUNC('month', o.orderPlacedAt)`, 'ASC')
            .getRawMany();

        const toSeries = (rows: { month: Date; value: number }[], label: string) => [{
            name: label,
            values: months.map(m => {
                const row = rows.find(r => {
                    const d = new Date(r.month);
                    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}` === m;
                });
                return row ? Number(row.value) : 0;
            }),
        }];

        return [
            {
                code: 'revenue-per-product',
                title: 'Ingresos',
                type: 'currency',
                allowProductSelection: true,
                labels: months,
                series: toSeries(revenue, 'Ingresos'),
            },
            {
                code: 'aov',
                title: 'Valor promedio de orden',
                type: 'currency',
                allowProductSelection: false,
                labels: months,
                series: toSeries(aov, 'AOV incl. tax'),
            },
            {
                code: 'units-sold',
                title: 'Unidades vendidas',
                type: 'number',
                allowProductSelection: true,
                labels: months,
                series: toSeries(units, 'Unidades'),
            },
        ];
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
