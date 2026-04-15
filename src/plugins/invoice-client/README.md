# Invoice client (Vendure → microservicio Matias)

- **No** persiste facturas en la base de datos de Vendure. Un solo cliente HTTP (`InvoiceMicroHttpClient`) usa `INVOICE_SERVICE_URL` + `INVOICE_SERVICE_API_KEY`.
- Las consultas GraphQL (`invoices`, `myInvoices`, totales) **reenvían** al micro; hace falta que el micro tenga `INVOICE_SERVICE_DATABASE_URL` configurada.

## Comprobar conexión (shop ↔ micro)

| Variable en shop | Debe coincidir con |
|------------------|---------------------|
| `INVOICE_SERVICE_URL` | Base del micro **incluyendo `/api`**, p. ej. `http://localhost:3010/api` |
| `INVOICE_SERVICE_API_KEY` | `VENDURE_SERVICE_API_KEY` en el `.env` del micro |

Rutas que usa el plugin: `GET /sequence/next`, `GET /invoices/by-order-code/:code`, `POST /invoices`, `GET /invoices/list`, `GET /invoices/totals/day`, `GET /invoices/totals/month` (todas bajo esa base URL).

## Migración desde el modelo anterior

Si en tu **Postgres local** quedaron tablas `invoice` y/o `invoice_sequence` (solo desarrollo), puedes borrarlas (copia de seguridad antes):

```sql
DROP TABLE IF EXISTS invoice CASCADE;
DROP TABLE IF EXISTS invoice_sequence CASCADE;
```

Si llegaste a registrar la migración antigua `1767000000000-invoice-sequence` en la tabla `migrations` de TypeORM y la borraste del repo, elimina también esa fila en `migrations` o ignora el aviso en entornos nuevos.

**Secuencia:** el contador por prefijo vive en el micro (`invoice_sequence` en la BD del micro). Si tenías `last_number` solo en local en el shop, copia ese valor a la tabla del micro antes de producción.
