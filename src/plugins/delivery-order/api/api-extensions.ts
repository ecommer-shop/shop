import gql from 'graphql-tag';

const deliveryOrderShopApiExtensions = gql`
    input CreateDeliveryOrderInput {
        barrio_origen: String!
        barrio_destino: String!
        origen_lat_lng: String!
        destino_lat_lng: String!
        valor_producto: String!
        valor_servicio: String!
        metodo_pago: String!
        id_cliente: String!
        creado_por: String!
        telefono_cliente: String!
        observacion: String
        imagen: String
        tiempo_aproximado: String
    }

    type CreateDeliveryOrderResult {
        success: Boolean!
        message: String
        id_documento: String
        fecha_creacion: Float
        error: String
        missing_fields: [String!]
        required_fields: [String!]
    }

    extend type Mutation {
        createDeliveryOrder(input: CreateDeliveryOrderInput!): CreateDeliveryOrderResult!
    }
`;

export const shopApiExtensions = gql`
    ${deliveryOrderShopApiExtensions}
`;
