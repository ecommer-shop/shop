# Session Summary — Wompi Subscription Billing

## Goal
Integrar suscripciones/pagos Wompi en el Admin Dashboard de Vendure (React/Vite) con widget de tokenización, firma de integridad correcta e información clara sobre métodos recurrentes vs manuales.

## Constraints & Preferences
- PostgreSQL, NestJS + Vendure + TypeORM + GraphQL.
- Admin Dashboard: React 19, Vite, `@vendure/dashboard`, `@tanstack/react-router`, Tailwind v4.
- Wompi WidgetCheckout v2: `signature: { integrity: hash }` (sin `amountInCents`/`reference` dentro).
- Orden correcto de firma para WIDGET: `amountInCents + reference + currency + integrityKey`.
- Orden correcto de firma para API REST: `reference + amountInCents + currency + integrityKey`.
- Dashboard usa `/admin-api/graphql` con credentials include.
- Script Wompi (`widget.js`) se carga dinámicamente en el componente.
- El WidgetCheckout v2 NO soporta restringir métodos de pago. Siempre muestra todos los disponibles.
- `WOMPI_PUBLIC_KEY` inyectado en HTML via `vite.config.mts` desde `process.env.WOMPI_PUBLIC_KEY`.

## Progress
### Done
- Backend: `generateWidgetIntegritySignature()` en `WompiService` con orden `amountInCents + reference + currency + key`.
- Backend: `generateTransactionSignature()` (API REST) con orden `reference + amountInCents + currency + key`.
- Backend: Query `GetWompiIntegritySignature` en `api-extensions.ts` y resolver en `wompi-subscription.resolver.ts`.
- Dashboard: `src/plugins/wompi-subscription/dashboard/` con `index.tsx` (ruta `/billing` en Settings), `billing-page.tsx` (3 pasos: view/plans/payment), `components/plan-card.tsx`.
- Dashboard: `WompiPaymentWidget` con carga dinámica de script, fetch de signature, apertura de `WidgetCheckout`.
- Dashboard: Inyección de `__WOMPI_PUBLIC_KEY__` en HTML via `vite.config.mts`.
- Dashboard: Plugin registrado con `dashboard: './dashboard/index.tsx'` en `@VendurePlugin`.
- Dashboard: Info detallada en el paso de pago:
  - Card con explicación de métodos recurrentes (automáticos, se tokenizan y cobran solos).
  - Card con advertencia de métodos manuales (pago antes del vencimiento o suspensión).
  - Label secundario en cada botón de método indicando su tipo de flujo.
- Storefront `/account/billing`: Descartado — la integración está en el Admin Dashboard.

### In Progress
- (none)

### Known Issues
- El WidgetCheckout v2 siempre muestra TODOS los métodos de pago del merchant, no filtra por `data.paymentMethod` ni `payment_method.type`. Es comportamiento esperado.

## Key Decisions
- La integración se movió del storefront (Next.js) al Admin Dashboard (React/Vite).
- Se crearon dos funciones de firma separadas porque Wompi usa orden distinto para widget (`amount+ref+currency+key`) vs API REST (`ref+amount+currency+key`).
- Script Wompi se carga dinámicamente on-demand en lugar de en el HTML base.
- Se agregó información educativa en la UI en vez de intentar filtrar métodos en el widget.

## Relevant Files
- `src/plugins/wompi-subscription/dashboard/billing-page.tsx`:
  - `ViewStep` (línea 414): Muestra suscripción actual.
  - `PlansStep` (línea 526): Selección de plan.
  - `PaymentStep` (línea 571): Selección de método con info recurrente/manual + widget.
  - `WompiPaymentWidget` (línea 750): Widget tokenización con carga dinámica y signature.
- `src/plugins/wompi-subscription/dashboard/components/plan-card.tsx`: Card clickeable de plan.
- `src/plugins/wompi-subscription/dashboard/index.tsx`: Entry point del dashboard extension.
- `src/plugins/wompi-subscription/services/wompi.service.ts`: `generateWidgetIntegritySignature()` (línea 144) y `generateTransactionSignature()` (línea 139).
- `src/plugins/wompi-subscription/api/api-extensions.ts`: Query `GetWompiIntegritySignature`.
- `src/plugins/wompi-subscription/api/wompi-subscription.resolver.ts`: Resolver `getWompiIntegritySignature`.
- `src/plugins/wompi-subscription/wompi-subscription.plugin.ts`: Registro dashboard + Admin API resolver.
- `vite.config.mts`: Inyección de `__WOMPI_PUBLIC_KEY__` en HTML.
