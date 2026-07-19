# Modernización del dashboard

Plan de mejoras visuales y de experiencia para el dashboard.
Estado: `[x]` hecho · `[~]` en progreso · `[ ]` pendiente

## Hechas anteriormente

- [x] Página Cocreativo (roadmap colaborativo): tablero + tabla, votos optimistas, hero con gradiente, avatares, estados vacíos ilustrados.
- [x] Estados vacíos bonitos en TODAS las tablas del core (Pedidos, Productos, etc.) vía `scripts/patch-empty-states.mjs`.
- [x] Command palette centrado y con iconos por comando.
- [x] UX de variantes para vendedores colombianos: "SKU" → "Referencia" por la vía oficial de Vendure (overrides de traducción en `src/plugins/seller-ux/dashboard/es.po`, descubiertos y fusionados automáticamente por el build), SKU opcional (`scripts/patch-seller-labels.mjs`) con generación automática (fix de `AutoSkuPlugin`, que nunca había funcionado y además crasheaba el server), y texto duplicado de "Destacado" eliminado.
- [x] Auditoría contra la documentación oficial (19/7/2026): patrón de EventBus de los plugins `auto-sku` y `channel-stock-location` coincide con el recomendado; `StockLocationStrategy` NO cubre dónde cae el stock inicial (el subscriber es la mejor opción disponible); los parches de money-input, estados vacíos y SKU-opcional no tienen API oficial equivalente (detailForms solo cubre inputs de páginas de detalle, no los paneles de creación). Mejora futura opcional: migrar los subscribers a `registerBlockingEventHandler` para eliminar la pequeña ventana en que la UI puede refrescar antes de que el SKU/stock se ajuste.
- [x] Fix de stock en marketplace (`src/plugins/channel-stock-location/`): el core escribía el stock inicial de variantes nuevas en la bodega global por defecto, invisible para el canal del vendedor (se veía "0 / 0"). Ahora un subscriber lo reubica en la bodega del canal. Cubre dashboard, importador de Excel y cualquier cliente del API.
- [x] Input de precio adaptado a COP (`scripts/patch-money-input.mjs` + `scripts/templates/money-input.patched.tsx`): solo dígitos, separador de miles en vivo, sin decimales, select-all al enfocar, vacío cuando el precio es 0.

## Quick wins

1. [ ] **Pase de consistencia en páginas propias** — aplicar la receta visual de Cocreativo (hero, cards rounded-xl, badges tintados) a Facturación y Plan, Métricas, Tiendas, Analíticas e Importar Excel.
2. [ ] **Skeletons en vez de spinners** — en las páginas propias que aún muestran spinner centrado, usar skeletons que imiten el layout final.
3. [ ] **Iconos en el menú lateral** para entradas de plugins (Cocreativo, Facturación y Plan, Ubicaciones de stock…).

## Efecto medio, alta visibilidad

4. [ ] **Página de inicio real** — saludo con nombre del vendedor, métricas clave, acciones rápidas y teaser del roadmap. *Primer intento (plugin `home` con widgets del Insights) se revirtió el 19/7/2026: los widgets no aparecían para el usuario; queda pendiente diagnosticar (los queries y el bundle estaban OK) o rehacerlo como ruta propia en vez de widgets.*
5. [ ] **Checklist de onboarding para vendedores nuevos** — primer producto, método de envío, primer pedido, verificados con datos reales, descartable. *Se revirtió junto con el punto 4 (el código nunca se llegó a commitear); si se retoma hay que reconstruirlo.*
6. [x] **Estados vacíos en páginas propias** — componente compartido `src/plugins/shared/dashboard/empty-state.tsx` aplicado en widget de métricas, página de Métricas Avanzadas y planes de Facturación. Las analíticas de Tiendas ya tenían buen tratamiento. De paso: fix del `asChild` inválido en el date-picker de métricas y del variant `danger` inexistente en el badge de suscripción.

## Apuestas grandes

7. [ ] **Centro de notificaciones** — conectar la campana del header a eventos reales (nuevo pedido, idea del roadmap completada, pago recibido) con un feed desplegable.
8. [ ] **Pase mobile** — auditar overflow de tablas y gráficos en páginas propias si la analítica muestra uso desde el teléfono.
9. [ ] **Refinamiento de tema** — púrpura de marca como primary consistente (focus rings, gráficos), grises más cálidos, radius unificado vía variables CSS.

## Relacionadas (backlog Cocreativo)

- [ ] Notificaciones por email al cambiar el estado de una idea (Resend ya configurado).
- [ ] Input de "nota de Ecommer" al priorizar (el campo `adminNote` ya existe en la API).
- [ ] Columnas ordenables en la tabla del roadmap.
