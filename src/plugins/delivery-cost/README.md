# Delivery Cost Plugin

Shop API module for calculating delivery prices without exposing provider credentials to the frontend.

## Environment

```env
DELIVERY_COST_API_KEY=your-provider-key
DELIVERY_COST_API_URL=https://us-central1-messengerdomis-19924.cloudfunctions.net/calcularCostoDelivery
DELIVERY_COST_TIMEOUT_MS=10000
```

`DELIVERY_COST_API_URL` is optional because the Messenger Domis strategy has the current URL as its default.

## Shop API query

```graphql
query CalculateDeliveryCost($input: DeliveryCostInput!) {
  calculateDeliveryCost(input: $input) {
    success
    error
    price {
      value
      currency
    }
    distance {
      value
      unit
      text
    }
    duration {
      value
      unit
      text
    }
  }
}
```

Variables:

```json
{
  "input": {
    "origin": "4.7110,-74.0721",
    "destination": "4.6097,-74.0817"
  }
}
```

## Swap the calculation

Use a function when a deployment needs a quick custom formula:

```ts
DeliveryCostPlugin.init({
  calculator: async (ctx, input) => ({
    success: true,
    price: { value: 12000, currency: 'COP' },
  }),
})
```

Use a strategy class when the calculation needs its own reusable API client or rules:

```ts
DeliveryCostPlugin.init({
  strategy: new MessengerDomisDeliveryCostStrategy({
    apiKey: process.env.DELIVERY_COST_API_KEY,
  }),
})
```
