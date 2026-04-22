import {
    RevenuePerProduct,
    AverageOrderValueMetric,
    UnitsSoldMetric,
} from '@pinelab/vendure-plugin-metrics';
import { RequestContext } from '@vendure/core';

export class IngresosPorProducto extends RevenuePerProduct {
    getTitle(ctx?: RequestContext) {
        return 'Ingresos';
    }
}
export class ValorPromedioDeOrden extends AverageOrderValueMetric {
    getTitle(ctx?: RequestContext) {
        return 'Valor promedio de orden';
    }
}
export class UnidadesVendidas extends UnitsSoldMetric {
    getTitle(ctx?: RequestContext) {
        return 'Unidades vendidas';
    }
}