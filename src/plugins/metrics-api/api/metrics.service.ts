import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class MetricsService {
    constructor(@InjectDataSource() private dataSource: DataSource) {}

    async getOperationalMetrics() {
        const tiendasPorSemana = await this.dataSource.query(`
            SELECT DATE_TRUNC('week', "createdAt") AS semana, COUNT(*) AS tiendas_creadas
            FROM channel
            WHERE code != '__default_channel__'
            GROUP BY semana ORDER BY semana DESC
        `);

        const tiendasConProductos = await this.dataSource.query(`
            SELECT COUNT(DISTINCT "channelId") AS tiendas_con_productos
            FROM product_channels_channel
            WHERE "channelId" != (SELECT id FROM channel WHERE code = '__default_channel__')
        `);

        const tiendasConVentas = await this.dataSource.query(`
            SELECT COUNT(DISTINCT occ."channelId") AS tiendas_con_ventas
            FROM order_channels_channel occ
            JOIN "order" o ON o.id = occ."orderId"
            WHERE o.state = 'PaymentSettled'
            AND occ."channelId" != (SELECT id FROM channel WHERE code = '__default_channel__')
        `);

        const distribucionPlanes = await this.dataSource.query(`
            SELECT sp.name AS plan, COUNT(cs.id) AS cantidad
            FROM customer_subscription cs
            JOIN subscription_plan sp ON sp.id = cs.plan_id
            GROUP BY sp.name ORDER BY cantidad DESC
        `);

        const diasPromedio = await this.dataSource.query(`
            SELECT AVG(EXTRACT(EPOCH FROM (primera_venta - canal_creado)) / 86400)::int AS dias_promedio
            FROM (
                SELECT c."createdAt" AS canal_creado, MIN(o."orderPlacedAt") AS primera_venta
                FROM channel c
                JOIN order_channels_channel occ ON occ."channelId" = c.id
                JOIN "order" o ON o.id = occ."orderId"
                WHERE c.code != '__default_channel__' AND o.state = 'PaymentSettled'
                GROUP BY c.id, c."createdAt"
            ) sub
        `);

        const transaccionalSemanal = await this.dataSource.query(`
            SELECT DATE_TRUNC('week', o."orderPlacedAt") AS semana,
                SUM(o."subTotalWithTax" + o."shippingWithTax") / 100 AS gmv_cop,
                COUNT(*) AS transacciones,
                AVG(o."subTotalWithTax" + o."shippingWithTax") / 100 AS ticket_promedio_cop
            FROM "order" o
            WHERE o.state = 'PaymentSettled'
            GROUP BY semana ORDER BY semana DESC
        `);

        const revenueSuscripciones = await this.dataSource.query(`
            SELECT COALESCE(SUM(sp.price), 0) AS revenue_suscripciones
            FROM customer_subscription cs
            JOIN subscription_plan sp ON sp.id = cs.plan_id
            WHERE cs.status = 'active'
        `);

        return {
            tiendas_con_productos: parseInt(tiendasConProductos[0]?.tiendas_con_productos ?? '0'),
            tiendas_con_ventas: parseInt(tiendasConVentas[0]?.tiendas_con_ventas ?? '0'),
            dias_promedio_primera_venta: diasPromedio[0]?.dias_promedio ?? null,
            tiendas_por_semana: tiendasPorSemana.map((r: any) => ({
                semana: r.semana?.toISOString?.() ?? String(r.semana),
                tiendas_creadas: parseInt(r.tiendas_creadas),
            })),
            distribucion_planes: distribucionPlanes.map((r: any) => ({
                plan: r.plan,
                cantidad: parseInt(r.cantidad),
            })),
            transaccional_semanal: transaccionalSemanal.map((r: any) => ({
                semana: r.semana?.toISOString?.() ?? String(r.semana),
                gmv_cop: parseFloat(r.gmv_cop),
                transacciones: parseInt(r.transacciones),
                ticket_promedio_cop: parseFloat(r.ticket_promedio_cop),
                revenue_ecommer: parseFloat((r.gmv_cop * 0.079).toFixed(0)),
            })),
            revenue_suscripciones_activas: parseFloat(revenueSuscripciones[0]?.revenue_suscripciones ?? '0'),
        };
    }
}
