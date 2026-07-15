# Invoice client (Vendure → microservicio Matias)

- **No** persiste facturas en la base de datos de Vendure. Un solo cliente HTTP (`InvoiceMicroHttpClient`) usa `INVOICE_SERVICE_URL` + `INVOICE_SERVICE_API_KEY`.
- Las consultas GraphQL (`invoices`, `myInvoices`, totales) **reenvían** al micro; hace falta que el micro tenga `INVOICE_SERVICE_DATABASE_URL` configurada.
- La numeración DIAN la asigna **Matias** (`/auto-increment/invoices` + `client_uuid`). El shop envía `matiasCompanyId`, `prefix` y `resolutionNumber` del canal (la resolución es obligatoria para que Matias elija el rango).

## Comprobar conexión (shop ↔ micro)

| Variable en shop | Debe coincidir con |
|------------------|---------------------|
| `INVOICE_SERVICE_URL` | Base del micro **incluyendo `/api`**, p. ej. `http://localhost:3010/api` |
| `INVOICE_SERVICE_API_KEY` | `VENDURE_SERVICE_API_KEY` en el `.env` del micro |

Rutas que usa el plugin: `GET /invoices/by-order-code/:code`, `POST /invoices`, `GET /invoices/:id/status`, `POST /invoices/:id/resend`, `GET /invoices/list`, `GET /invoices/totals/day`, `GET /invoices/totals/month` (todas bajo esa base URL).

El reenvío usa el **CUFE/trackId** (`XmlDocumentKey`) guardado al emitir; Matias documenta `POST /documents/sendmail/{trackId}?client_uuid=`.

OpenAPI oficial: https://api-v2.matias-api.com/api/docs
Nota: en Casa de Software el query param es `client_uuid` (UUID de la tienda cliente), no `company_id`.
