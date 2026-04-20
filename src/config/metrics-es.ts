import {
    RevenuePerProduct,
    AverageOrderValueMetric,
    UnitsSoldMetric,
} from '@pinelab/vendure-plugin-metrics';

export class IngresosPorProducto extends RevenuePerProduct {
    getTitle(ctx?: any) {
        return 'Ingresos';
    }
}

export class ValorPromedioDeOrden extends AverageOrderValueMetric {
    getTitle(ctx?: any) {
        return 'Valor promedio de orden';
    }
}

export class UnidadesVendidas extends UnitsSoldMetric {
    getTitle(ctx?: any) {
        return 'Unidades vendidas';
    }
}
