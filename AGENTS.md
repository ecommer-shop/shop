# Session Summary — Wompi Subscription Billing

## Goal
Refactor the Wompi subscription plugin from monolithic files into focused, single-responsibility services, guards, resolvers, and dashboard components — all compiling cleanly and importable by existing callers.

## Constraints & Preferences
- PostgreSQL, NestJS + Vendure + TypeORM + GraphQL.
- Admin Dashboard: React 19, Vite, `@vendure/dashboard`, Tailwind v4.
- Wompi API custom desde frontend con llave pública (Nunca llave privada al cliente).
- Sin `@Allow()` en ningún resolver — Clerk/Google auth, no sesión Vendure.
- `customerEmail` opcional como identificador fallback.
- `localStorage.getItem('vendure-selected-channel-token')` para canal activo (no `activeChannel` query).
- Custom fields `hidden`/`hiddenAt` como columnas separadas (no JSONB): `customFieldsHidden` (boolean DEFAULT false), `customFieldsHiddenat` (timestamp nullable).
- FREE plan sin expiración (`endsAt: null`).
- JobQueue de Vendure (database-backed, con retry) para cron jobs.
- Templates .hbs para emails de suscripción con MJML + Handlebars.
- Logger de Vendure importado desde `@vendure/core`, nunca desde `@nestjs/common`.

## Progress
### Done
- **constants.ts partido en 3**: `constants.ts` (constantes puras + fallback limits), `payment-methods.ts` (PaymentFlowType, método de pago config), `interfaces.ts` (Wompi types/options). Todos los archivos del plugin actualizan imports.
- **subscription.service.ts (840→0 líneas) eliminado y reemplazado por 6 servicios + 1 util**:
  - `PlanManagementService` — plan CRUD, seeding, `assignFreePlanToAdministrator`.
  - `SubscriptionQueryService` — consultas read-only (by admin/id/reference, batch queries para jobs, `getAdministratorEmail`).
  - `SubscriptionWriteService` — `createRecurrentSubscription`, `createPendingSubscription`, `activateSubscriptionAfterPayment`.
  - `SubscriptionLifecycleService` — `updateSubscriptionStatus`, `extendSubscription`, `cancelSubscription`, `downgradeToFree`, `cancelAutoRenew`, etc.
  - `FeatureCheckService` — `getFeatureValue`, `checkFeatureAccess`, `checkProductLimit`, `checkVariationLimit`, channel helpers.
  - `ProductLimitEnforcementService` — `hideExcessProducts`, `restoreHiddenProducts`, `hideExcessVariants`, `restoreHiddenVariants`.
  - `utils/date-utils.ts` — función pura `calculateEndDate`.
- **Resolver partido en 3**: `plan.resolver.ts` (allPlans query), `wompi.resolver.ts` (GetWompiIntegritySignature), `subscription.resolver.ts` (todo subscription CRUD/queries). Se elimina `wompi-subscription.resolver.ts`.
- **feature.guard.ts reescrito con 4 clases**: `FeatureGuard`, `ProductLimitGuard`, `ProductVariationLimitGuard`, `FeatureAccessGuard`. Todos inyectan `SubscriptionQueryService` + `FeatureCheckService` + `PlanManagementService` en vez de `SubscriptionService`.
- **plan.guard.ts actualizado**: inyecta `SubscriptionQueryService` + `PlanManagementService`.
- **wompi-webhook.controller.ts partido**: `WompiWebhookController` (webhook) y `WompiTokenController` (create-payment-source) en archivos separados.
- **billing-job.service.ts reescrito**: inyecta `SubscriptionQueryService`, `SubscriptionLifecycleService`, `FeatureCheckService`, `ProductLimitEnforcementService`. Sin dependencia a `SubscriptionService`.
- **plugin.ts actualizado**: providers/exports incluyen los 6 nuevos servicios, `BillingEmailService`. Se exporta `SubscriptionQueryService`, `FeatureCheckService`, `PlanManagementService`, `WompiService`, `BillingEmailService`.
- **services/index.ts**: exporta solo los nuevos archivos, no subscription.service.ts.
- **api/index.ts**: exporta plan.resolver + subscription.resolver + wompi.resolver + ambos controllers.
- **guards/index.ts**: exporta los 4 feature guards + plan.guard.
- **BillingJobService cron con JobQueue + ProcessContext**: 5 colas con stagger de primeros ticks. Envío de emails integrado.
- **BillingEmailService**: sendRenewalSuccess/Failed, sendManualReminder, sendPaymentExpired, sendSuspended — via Resend + Handlebars + MJML.
- **Guard `resolveAdministratorId`**: fallback `ctx?.session?.activeUserId` para requests del dashboard nativo.
- **`hidden`/`hiddenAt` en Product y ProductVariant**: columnas custom, no soft-delete.
- **`ProductLimitEnforcementService`**: hide/restore productos y variantes respetando límites.
- **`createProduct` validación**: `UserInputError` si falta traducción con name/slug.
- **Migration 1774400000000-add-hidden-custom-fields**: ALTER TABLE para columnas boolean/timestamp.
- **5 templates de email**: renewal-success, renewal-failed, manual-reminder, payment-expired, suspended.
- **Server y dashboard compilan limpio**: `npm run build:server` + `npm run build:dashboard` sin errores.
- **`billing-page.tsx` (1493→166 líneas) partido en 6 archivos**:
  - `graphql-queries.ts` — GQL queries/mutations, types, helpers, payment method config.
  - `WompiPaymentWidget.tsx` — WompiJS initialization, Nequi/Daviplata/Card tokenization forms.
  - `ViewStep.tsx` — subscription view + UsageBar component.
  - `PlansStep.tsx` — plan selection grid.
  - `PaymentStep.tsx` — payment flow (recurrent/manual tabs, pending result states).
  - `billing-page.tsx` — orchestrator with state management and data fetching.

## Key Decisions
- **Sin `@Allow()`**: AuthGuard no se ejecuta → `ctx.activeUserId` es null → fallback `ctx.session.activeUserId` + `customerEmail` desde args.
- **Custom fields columnas separadas**, no JSONB: queries usan `product."customFieldsHidden"` directo.
- **`hidden` flag en vez de `deletedAt`**: soft-delete (`deletedAt`) confunde ocultamiento con eliminación real. Custom field `hidden` permite restauración al subir de plan.
- **`endsAt: null` en FREE plan**: ningún query de renovación/grace period lo selecciona porque filtran por `autoRenew` o `paymentFlowType`.
- **JobQueue + ProcessContext**: jobs persistentes en DB, visibles en Admin UI, retry automático. Server encola, worker procesa.
- **Barrel files minimal**: solo 3 (`services/index.ts`, `guards/index.ts`, `api/index.ts`), imports actualizados uno a uno.
- **Logger de `@vendure/core`** no de `@nestjs/common`: NestJS Logger no tiene `static info()`.
- **Servicios con dependencias lineales**: `SubscriptionQueryService` es base (solo repos), de él dependen `FeatureCheckService` y `SubscriptionWriteService`, de estos dependen `SubscriptionLifecycleService`. Sin dependencias circulares.
- **Subscription service eliminado completamente**: cada importador pasa al servicio especializado correspondiente.

## Next Steps
- (none — all planned refactoring complete)

## Critical Context
- **`activeChannel` query falla sin sesión Vendure**: siempre usar localStorage para `vendure-selected-channel-token`.
- **`activeAdministrator` query SÍ funciona** sin sesión Vendure.
- **Sin `@Allow()`**: AuthGuard de Vendure no se ejecuta → guards deben usar fallbacks: `ctx.activeUserId` → `ctx.req.activeUserId` → `ctx.req.raw.activeUserId` → `ctx.session.activeUserId` → `customerEmail` desde args/body.
- **Custom fields columnas**: `customFieldsHidden` (boolean DEFAULT false), `customFieldsHiddenat` (timestamp). No JSONB.
- **FREE plan**: `endsAt: null`, `autoRenew: false`, `paymentFlowType: MANUAL`.
- **Productos corruptos sin traducción**: matan la query `products` completa (`Product.name` non-nullable). `createProduct` valida traducciones.
- **Sandbox**: NEQUI teléfono `3991111111`, DAVIPLATA teléfono `3991111111` OTP `574829`, CARD `4242424242424242`.
- **Wompi public key**: `pub_test_MrK43357NVEGW9UjDayAiILR9EKToTCm`.

## Relevant Files
- `src/plugins/wompi-subscription/constants.ts`: feature codes, plan names, grace/suspension days, fallback limits.
- `src/plugins/wompi-subscription/payment-methods.ts`: PaymentFlowType, method config, PAYMENT_METHOD_FLOW mapping.
- `src/plugins/wompi-subscription/interfaces.ts`: Wompi API interfaces (plugin options, payment source, transaction, event, acceptance token).
- `src/plugins/wompi-subscription/services/plan-management.service.ts`: plan CRUD, seeding, assignFreePlan.
- `src/plugins/wompi-subscription/services/subscription-query.service.ts`: read-only queries (by admin/id/reference, batch jobs, getAdministratorEmail).
- `src/plugins/wompi-subscription/services/subscription-write.service.ts`: createRecurrent/Pending, activateAfterPayment, createSubscription.
- `src/plugins/wompi-subscription/services/subscription-lifecycle.service.ts`: status transitions, extend, cancel, downgrade, stopAutoRenew.
- `src/plugins/wompi-subscription/services/feature-check.service.ts`: getFeatureValue, checkFeatureAccess, checkProduct/VariationLimit, channel helpers.
- `src/plugins/wompi-subscription/services/product-limit-enforcement.service.ts`: hideExcess/RestoreHidden para products y variants.
- `src/plugins/wompi-subscription/services/utils/date-utils.ts`: función pura calculateEndDate.
- `src/plugins/wompi-subscription/services/billing-job.service.ts`: 5 JobQueues con ProcessContext, emails integrados.
- `src/plugins/wompi-subscription/services/billing-email.service.ts`: Resend + Handlebars + MJML, 5 métodos send*.
- `src/plugins/wompi-subscription/api/subscription.resolver.ts`: mutations/queries de suscripción (mySubscription, create*, cancel*, stopAutoRenew, limits).
- `src/plugins/wompi-subscription/api/plan.resolver.ts`: allPlans query.
- `src/plugins/wompi-subscription/api/wompi.resolver.ts`: GetWompiIntegritySignature.
- `src/plugins/wompi-subscription/api/wompi-webhook.controller.ts`: WompiWebhookController.
- `src/plugins/wompi-subscription/api/wompi-token.controller.ts`: WompiTokenController.
- `src/plugins/wompi-subscription/api/product-limit.resolver.ts`: createProduct con validación de traducción.
- `src/plugins/wompi-subscription/guards/feature.guard.ts`: FeatureGuard.
- `src/plugins/wompi-subscription/guards/product-limit.guard.ts`: ProductLimitGuard.
- `src/plugins/wompi-subscription/guards/product-variation-limit.guard.ts`: ProductVariationLimitGuard.
- `src/plugins/wompi-subscription/guards/feature-access.guard.ts`: FeatureAccessGuard.
- `src/plugins/wompi-subscription/guards/plan.guard.ts`: PlanGuard con PLAN_HIERARCHY.
- `src/plugins/wompi-subscription/wompi-subscription.plugin.ts`: providers/exports con todos los servicios.
- `src/plugins/wompi-subscription/services/index.ts`: barrel exports de servicios.
- `src/plugins/wompi-subscription/guards/index.ts`: barrel exports de guards.
- `src/plugins/wompi-subscription/api/index.ts`: barrel exports de resolvers/controllers.
- `static/email/templates/subscription/`: 5 templates .hbs (renewal-success, renewal-failed, manual-reminder, payment-expired, suspended).
- `src/plugins/wompi-subscription/dashboard/graphql-queries.ts`: GQL docs, types, helpers.
- `src/plugins/wompi-subscription/dashboard/WompiPaymentWidget.tsx`: WompiJS + tokenization forms.
- `src/plugins/wompi-subscription/dashboard/ViewStep.tsx`: subscription view step.
- `src/plugins/wompi-subscription/dashboard/PlansStep.tsx`: plan selection step.
- `src/plugins/wompi-subscription/dashboard/PaymentStep.tsx`: payment flow step.
- `src/plugins/wompi-subscription/dashboard/billing-page.tsx`: orchestrator (166 líneas).
