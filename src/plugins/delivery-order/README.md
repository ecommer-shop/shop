# Delivery Order Plugin

Shop API module for creating delivery orders without exposing provider credentials to the frontend.

## Environment

```env
DELIVERY_ORDER_API_KEY=your-provider-key
DELIVERY_ORDER_API_URL=https://us-central1-messengerdomis-19924.cloudfunctions.net/crearDomicilio
DELIVERY_ORDER_TIMEOUT_MS=10000
```

`DELIVERY_ORDER_API_URL` is optional because the Messenger Domis strategy has the current URL as its default.
If `DELIVERY_ORDER_API_KEY` is not set, the strategy also checks `MESSENGER_DOMIS_API_KEY` and `DELIVERY_COST_API_KEY`.

## Shop API mutation

```graphql
mutation CreateDeliveryOrder($input: CreateDeliveryOrderInput!) {
  createDeliveryOrder(input: $input) {
    success
    message
    id_documento
    fecha_creacion
    error
    missing_fields
    required_fields
  }
}
```

Variables:

```json
{
  "input": {
    "barrio_origen": "El Poblado",
    "barrio_destino": "Laureles",
    "origen_lat_lng": "6.2442,-75.5812",
    "destino_lat_lng": "6.2534,-75.5963",
    "valor_producto": "50000",
    "valor_servicio": "8000",
    "metodo_pago": "Efectivo",
    "id_cliente": "CLI-001",
    "creado_por": "Juan Perez",
    "telefono_cliente": "3001234567",
    "observacion": "Dejar en porteria",
    "imagen": "",
    "tiempo_aproximado": "30 min"
  }
}
```

Required fields:

```txt
barrio_origen, barrio_destino, origen_lat_lng, destino_lat_lng,
valor_producto, valor_servicio, metodo_pago, id_cliente,
creado_por, telefono_cliente
```

Optional fields:

```txt
observacion, imagen, tiempo_aproximado
```

## Swap the provider

Use a function for a quick custom integration:

```ts
DeliveryOrderPlugin.init({
  creator: async (ctx, input) => ({
    success: true,
    message: 'Domicilio creado',
    id_documento: 'local-test-1',
    fecha_creacion: Date.now(),
  }),
})
```

Use a strategy class when the provider needs its own API client or response mapping:

```ts
DeliveryOrderPlugin.init({
  strategy: new MessengerDomisDeliveryOrderStrategy({
    apiKey: process.env.DELIVERY_ORDER_API_KEY,
  }),
})
```
