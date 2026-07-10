import gql from 'graphql-tag';

export const adminApiExtensions = gql`
    type WeeklyStat {
        semana: String!
        tiendas_creadas: Int!
    }
    type PlanStat {
        plan: String!
        cantidad: Int!
    }
    type WeeklyTransactional {
        semana: String!
        gmv_cop: Float!
        transacciones: Int!
        ticket_promedio_cop: Float!
    }
    type OperationalMetrics {
        tiendas_con_productos: Int!
        tiendas_con_ventas: Int!
        dias_promedio_primera_venta: Int
        tiendas_por_semana: [WeeklyStat!]!
        distribucion_planes: [PlanStat!]!
        transaccional_semanal: [WeeklyTransactional!]!
    }
    extend type Query {
        operationalMetrics: OperationalMetrics!
    }
`;
