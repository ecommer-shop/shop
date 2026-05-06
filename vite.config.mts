import { vendureDashboardPlugin } from '@vendure/dashboard/vite';
import { LanguageCode } from '@vendure/core';
import { dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { defineConfig } from 'vite';
import { IS_DEV } from './src/config/environment';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function patchVendureDashboardChannelPermissions() {
    return {
        name: 'patch-vendure-dashboard-channel-permissions',
        enforce: 'pre' as const,
        transform(code: string, id: string) {
            const normalizedId = id.replace(/\\/g, '/');
            let nextCode = code;

            if (normalizedId.includes('/@vendure/dashboard/src/lib/components/shared/boolean-badge.tsx')) {
                nextCode = nextCode
                    .replace(/id:\s*['"]CM5TXb['"]/g, 'id: "RxzN1M"')
                    .replace(/id:\s*['"]77Ufuv['"]/g, 'id: "E/QGRL"')
                    .replace(/id="CM5TXb"/g, 'id="RxzN1M"')
                    .replace(/id="77Ufuv"/g, 'id="E/QGRL"');
            }

            if (normalizedId.includes('/@vendure/dashboard/src/lib/components/layout/channel-switcher.tsx')) {
                if (!nextCode.includes("import { usePermissions } from '@/vdb/hooks/use-permissions.js';")) {
                    nextCode = nextCode.replace(
                        "import { useUserSettings } from '@/vdb/hooks/use-user-settings.js';",
                        "import { useUserSettings } from '@/vdb/hooks/use-user-settings.js';\nimport { usePermissions } from '@/vdb/hooks/use-permissions.js';",
                    );
                }

                if (!nextCode.includes('const { hasPermissions } = usePermissions();')) {
                    nextCode = nextCode.replace(
                        '    const { channels, activeChannel, setActiveChannel } = useChannel();',
                        '    const { channels, activeChannel, setActiveChannel } = useChannel();\n    const { hasPermissions } = usePermissions();',
                    );
                }

                if (!nextCode.includes("{hasPermissions(['CreateChannel']) &&")) {
                    nextCode = nextCode.replace(
                        `                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="gap-2 p-2 cursor-pointer" asChild>
                                <Link to={'/channels/new'}>
                                    <div className="bg-background flex size-6 items-center justify-center rounded-md border">
                                        <Plus className="size-4" />
                                    </div>
                                    <div className="text-muted-foreground font-medium">Add channel</div>
                                </Link>
                            </DropdownMenuItem>`,
                        `                            {hasPermissions(['CreateChannel']) && (
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="gap-2 p-2 cursor-pointer" asChild>
                                        <Link to={'/channels/new'}>
                                            <div className="bg-background flex size-6 items-center justify-center rounded-md border">
                                                <Plus className="size-4" />
                                            </div>
                                            <div className="text-muted-foreground font-medium">Add channel</div>
                                        </Link>
                                    </DropdownMenuItem>
                                </>
                            )}`,
                    );
                }
            }

            if (normalizedId.includes('/@vendure/dashboard/src/app/routes/_authenticated/_channels/channels_.$id.tsx')) {
                nextCode = nextCode.replace(
                    "<PermissionGuard requires={['UpdateChannel']}>",
                    "<PermissionGuard requires={creatingNewEntity ? ['CreateChannel'] : ['UpdateChannel']}>",
                );
            }

            if (normalizedId.includes('/@vendure/dashboard/src/app/routes/_authenticated/_payment-methods/payment-methods_.$id.tsx')) {
                if (!nextCode.includes("import { EntityAssets } from '@/vdb/components/shared/entity-assets.js';")) {
                    nextCode = nextCode.replace(
                        "import { ErrorPage } from '@/vdb/components/shared/error-page.js';",
                        "import { ErrorPage } from '@/vdb/components/shared/error-page.js';\nimport { EntityAssets } from '@/vdb/components/shared/entity-assets.js';",
                    );
                }
                if (!nextCode.includes("import { Field } from '@/vdb/components/ui/field.js';")) {
                    nextCode = nextCode.replace(
                        "import { Button } from '@/vdb/components/ui/button.js';",
                        "import { Button } from '@/vdb/components/ui/button.js';\nimport { Field } from '@/vdb/components/ui/field.js';",
                    );
                }

                nextCode = nextCode.replace(
                    `        transformCreateInput: input => {
            return {
                ...input,
                checker: input.checker?.code ? input.checker : undefined,
                handler: input.handler,
            };
        },`,
                    `        transformCreateInput: input => {
            return {
                ...input,
                code:
                    input.code?.trim() ||
                    (input.name ?? '')
                        .toLowerCase()
                        .trim()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/^-+|-+$/g, ''),
                checker: input.checker?.code ? input.checker : undefined,
                handler: input.handler?.code ? input.handler : undefined,
            };
        },`,
                );
                nextCode = nextCode.replace(
                    `                    description: err instanceof Error ? err.message : 'Unknown error',`,
                    `                    description:
                        err instanceof Error &&
                        (err.message.includes('ConfigurableOperationInput!') ||
                            err.message.includes('PaymentMethodHandler'))
                            ? 'Debes seleccionar un método de procesamiento de pago (Calculator) antes de crear el método de pago.'
                            : err instanceof Error
                              ? err.message
                              : 'Error desconocido',`,
                );

                nextCode = nextCode.replace(
                    `                        <FormFieldWrapper
                            control={form.control}
                            name="code"
                            label={<Trans>Code</Trans>}
                            render={({ field }) => <Input {...field} />}
                        />`,
                    '',
                );
                nextCode = nextCode.replace(
                    `                        <TranslatableFormFieldWrapper
                            control={form.control}
                            name="name"
                            label={<Trans>Name</Trans>}
                            render={({ field }) => <Input {...field} />}
                        />`,
                    `                        <TranslatableFormFieldWrapper
                            control={form.control}
                            name="name"
                            label="Nombre"
                            render={({ field }) => <Input {...field} />}
                        />`,
                );
                nextCode = nextCode.replace(
                    `                        label={<Trans>Enabled</Trans>}`,
                    `                        label="Habilitado"`,
                );
                nextCode = nextCode.replace(
                    `                    <TranslatableFormFieldWrapper
                        control={form.control}
                        name="description"
                        label={<Trans>Description</Trans>}
                        render={({ field }) => <RichTextInput {...field} />}
                    />`,
                    '',
                );
                nextCode = nextCode.replace(
                    `<CustomFieldsPageBlock column="main" entityType="PaymentMethod" control={form.control} />`,
                    `<PageBlock
                    column="main"
                    blockId="bank-certification-pdf"
                    title="Carga tu certificado bancario"
                >
                    <Field>
                        <EntityAssets
                            compact={true}
                            multiSelect={false}
                            onChange={value => {
                                form.setValue('customFields.bankCertificationPdf', value.featuredAssetId ?? undefined, {
                                    shouldDirty: true,
                                    shouldValidate: true,
                                });
                            }}
                        />
                    </Field>
                </PageBlock>
                <PageBlock column="main" blockId="payment-method-bank-fields" title="Datos bancarios">
                    <DetailFormGrid>
                        <FormFieldWrapper
                            control={form.control}
                            name="customFields.accountNumber"
                            label="Número de cuenta"
                            render={({ field }) => <Input {...field} />}
                        />
                        <FormFieldWrapper
                            control={form.control}
                            name="customFields.bankName"
                            label="Banco"
                            render={({ field }) => <Input {...field} />}
                        />
                    </DetailFormGrid>
                    <FormFieldWrapper
                        control={form.control}
                        name="customFields.bankCertificationVerified"
                        label="Certificación bancaria verificada"
                        render={({ field }) => (
                            <Switch checked={field.value ?? false} onCheckedChange={field.onChange} />
                        )}
                    />
                </PageBlock>`,
                );
                nextCode = nextCode.replace(
                    'title={<Trans>Payment eligibility checker</Trans>}',
                    "title={'Verificador de elegibilidad de pago'}",
                );
                nextCode = nextCode.replace(
                    'title={<Trans>Calculator</Trans>}',
                    "title={'Calculadora'}",
                );
            }
            if (
                normalizedId.includes(
                    '/@vendure/dashboard/src/app/routes/_authenticated/_payment-methods/components/payment-eligibility-checker-selector.tsx',
                )
            ) {
                nextCode = nextCode.replace(
                    'buttonText="Select Payment Eligibility Checker"',
                    `buttonText="Seleccionar verificador de elegibilidad de pago"`,
                );
                nextCode = nextCode.replace(
                    'emptyText="No checkers found"',
                    `emptyText="No se encontraron verificadores"`,
                );
            }
            if (
                normalizedId.includes(
                    '/@vendure/dashboard/src/app/routes/_authenticated/_payment-methods/components/payment-handler-selector.tsx',
                )
            ) {
                nextCode = nextCode.replace(
                    'buttonText="Select Payment Handler"',
                    `buttonText="Seleccionar método de pago (Calculadora)"`,
                );
            }

            if (
                normalizedId.includes(
                    '/@vendure/dashboard/src/app/routes/_authenticated/_products/components/add-product-variant-dialog.tsx',
                )
            ) {
                if (!nextCode.includes('const generateVariantSku = () =>')) {
                    nextCode = nextCode.replace(
                        'type FormValues = z.infer<typeof formSchema>;\n',
                        `type FormValues = z.infer<typeof formSchema>;\n\nconst generateVariantSku = () => {\n    const bytes = new Uint8Array(6);\n    globalThis.crypto.getRandomValues(bytes);\n    return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');\n};\n`,
                    );
                }

                nextCode = nextCode.replace(
                    `    useEffect(() => {\n        if (open && productData?.product) {\n            checkForDuplicateVariant(form.getValues());\n        }\n    }, [open, productData?.product, checkForDuplicateVariant, form]);`,
                    `    useEffect(() => {\n        if (open && productData?.product) {\n            checkForDuplicateVariant(form.getValues());\n            form.setValue('sku', generateVariantSku(), {\n                shouldDirty: true,\n                shouldValidate: true,\n            });\n        }\n    }, [open, productData?.product, checkForDuplicateVariant, form]);`,
                );

                nextCode = nextCode.replace(
                    `                        <FormFieldWrapper\n                            control={form.control}\n                            name="sku"\n                            label={<Trans>SKU</Trans>}\n                            render={({ field }) => <Input {...field} />}\n                        />`,
                    `                        <FormFieldWrapper\n                            control={form.control}\n                            name="sku"\n                            label={<Trans>SKU</Trans>}\n                            render={({ field }) => (\n                                <Input {...field} readOnly className="cursor-not-allowed bg-muted" value={field.value?.toUpperCase?.() ?? ''} />\n                            )}\n                        />`,
                );
            }

            if (
                normalizedId.includes(
                    '/@vendure/dashboard/src/app/routes/_authenticated/_product-variants/product-variants_.$id.tsx',
                )
            ) {
                nextCode = nextCode.replace(
                    `                        <FormFieldWrapper\n                            control={form.control}\n                            name="sku"\n                            label={<Trans>SKU</Trans>}\n                            render={({ field }) => <Input {...field} />}\n                        />`,
                    `                        <FormFieldWrapper\n                            control={form.control}\n                            name="sku"\n                            label={<Trans>SKU</Trans>}\n                            render={({ field }) => (\n                                <Input {...field} readOnly className="cursor-not-allowed bg-muted" value={field.value?.toUpperCase?.() ?? ''} />\n                            )}\n                        />`,
                )
            }

            // Cambiar la moneda por defecto del preview en el diálogo de idioma de USD a COP
            if (normalizedId.includes('/@vendure/dashboard/src/lib/components/layout/language-dialog')) {
                nextCode = nextCode.replace(
                    `useState<string>('USD')`,
                    `useState<string>('COP')`,
                );
            }

            return nextCode === code ? null : nextCode;
        },
    };
}

export default defineConfig({
    base: '/dashboard',
    build: {
        outDir: `${__dirname}/dist/dashboard`,
        emptyOutDir: true,
    },
    plugins: [
        patchVendureDashboardChannelPermissions(),
        vendureDashboardPlugin({
            // The vendureDashboardPlugin will scan your configuration in order
            // to find any plugins which have dashboard extensions, as well as
            // to introspect the GraphQL schema based on any API extensions
            // and custom fields that are configured.
            vendureConfigPath: pathToFileURL('./src/vendure-config.ts'),
            // Points to the location of your Vendure server.
            api: IS_DEV
                ? { host: 'http://localhost', port: 3000 }
                : {
                    host: process.env.HOST_URL as string,
                    // host: 'https://admin.ecommer.shop'
                },
            // When you start the Vite server, your Admin API schema will
            // be introspected and the types will be generated in this location.
            // These types can be used in your dashboard extensions to provide
            // type safety when writing queries and mutations.
            gqlOutputPath: './src/gql',
            i18n: {
                defaultLanguage: (process.env.DASHBOARD_DEFAULT_LANGUAGE as LanguageCode) ?? LanguageCode.es,
                defaultLocale: process.env.DASHBOARD_DEFAULT_LOCALE ?? 'CO',
            },
            // ─── Ecommer brand palette ───────────────────────────────────────
            // #12123F Deadly Depths     → hsl(240 56% 16%)
            // #9969F8 Candy Grape Fizz  → hsl(260 91% 69%)
            // #6BB8FF Blue Mana         → hsl(209 100% 71%)
            // #F1F1F1 Beluga            → hsl(0 0% 95%)
            theme: {
                light: {
                    background: 'hsl(0 0% 95%)',          // Beluga
                    foreground: 'hsl(240 56% 16%)',       // Deadly Depths
                    card: 'hsl(0 0% 100%)',
                    'card-foreground': 'hsl(240 56% 16%)',
                    popover: 'hsl(0 0% 100%)',
                    'popover-foreground': 'hsl(240 56% 16%)',
                    primary: 'hsl(260 91% 69%)',       // Candy Grape Fizz
                    'primary-foreground': 'hsl(0 0% 100%)',
                    secondary: 'hsl(209 100% 71%)',      // Blue Mana
                    'secondary-foreground': 'hsl(240 56% 10%)',
                    muted: 'hsl(260 40% 93%)',
                    'muted-foreground': 'hsl(240 20% 45%)',
                    accent: 'hsl(209 100% 71%)',
                    'accent-foreground': 'hsl(240 56% 16%)',
                    border: 'hsl(240 20% 85%)',
                    input: 'hsl(240 20% 85%)',
                    ring: 'hsl(260 91% 69%)',
                    sidebar: 'hsl(0 0% 100%)',
                    'sidebar-foreground': 'hsl(240 56% 16%)',
                    'sidebar-primary': 'hsl(260 91% 69%)',
                    'sidebar-primary-foreground': 'hsl(0 0% 100%)',
                    'sidebar-accent': 'hsl(260 40% 93%)',
                    'sidebar-accent-foreground': 'hsl(240 56% 16%)',
                    'sidebar-border': 'hsl(240 20% 88%)',
                    'sidebar-ring': 'hsl(260 91% 69%)',
                    brand: '#9969F8',
                    'brand-lighter': '#c4a9fb',
                    'brand-darker': '#6b35f5',
                    // ── semantic states ──────────────────────────────────
                    destructive: 'hsl(0 84% 55%)',
                    'destructive-foreground': 'hsl(0 0% 100%)',
                    success: 'hsl(142 72% 29%)',
                    'success-foreground': 'hsl(0 0% 100%)',
                    warning: 'hsl(38 95% 48%)',
                    'warning-foreground': 'hsl(0 0% 100%)',
                    'soft-danger': 'hsl(0 84% 94%)',
                    'soft-danger-foreground': 'hsl(0 72% 42%)',
                    radius: '0.625rem',
                },
                dark: {
                    background: 'hsl(240 56% 10%)',
                    foreground: 'hsl(0 0% 95%)',          // Beluga
                    card: 'hsl(240 52% 14%)',
                    'card-foreground': 'hsl(0 0% 95%)',
                    popover: 'hsl(240 52% 12%)',
                    'popover-foreground': 'hsl(0 0% 95%)',
                    primary: 'hsl(260 91% 69%)',       // Candy Grape Fizz
                    'primary-foreground': 'hsl(0 0% 100%)',
                    secondary: 'hsl(209 100% 71%)',      // Blue Mana
                    'secondary-foreground': 'hsl(240 56% 10%)',
                    muted: 'hsl(240 40% 20%)',
                    'muted-foreground': 'hsl(240 15% 65%)',
                    accent: 'hsl(240 45% 22%)',
                    'accent-foreground': 'hsl(0 0% 95%)',
                    border: 'hsl(240 35% 22%)',
                    input: 'hsl(240 35% 22%)',
                    ring: 'hsl(260 91% 69%)',
                    sidebar: 'hsl(240 60% 8%)',
                    'sidebar-foreground': 'hsl(0 0% 95%)',
                    'sidebar-primary': 'hsl(260 91% 69%)',
                    'sidebar-primary-foreground': 'hsl(0 0% 100%)',
                    'sidebar-accent': 'hsl(240 45% 18%)',
                    'sidebar-accent-foreground': 'hsl(0 0% 95%)',
                    'sidebar-border': 'hsl(240 35% 18%)',
                    'sidebar-ring': 'hsl(260 91% 69%)',
                    brand: '#9969F8',
                    'brand-lighter': '#c4a9fb',
                    'brand-darker': '#6b35f5',
                    // ── semantic states ──────────────────────────────────
                    destructive: 'hsl(0 84% 60%)',
                    'destructive-foreground': 'hsl(0 0% 100%)',
                    success: 'hsl(142 72% 45%)',
                    'success-foreground': 'hsl(0 0% 100%)',
                    warning: 'hsl(38 95% 55%)',
                    'warning-foreground': 'hsl(0 0% 100%)',
                    'soft-danger': 'hsl(0 55% 20%)',
                    'soft-danger-foreground': 'hsl(0 84% 75%)',
                    radius: '0.625rem',
                },
            },
        }),
        // Plugin post-dashboard-html: modifica el HTML después de que vendureDashboardPlugin lo genera
        {
            name: 'post-dashboard-html',
            enforce: 'post',  // Se ejecuta DESPUÉS de todos los plugins
            generateBundle(options, bundle) {
                // Buscar el index.html en el bundle
                const indexHtml = bundle['index.html'];
                if (!indexHtml || indexHtml.type !== 'asset') {
                    console.warn('[post-dashboard-html] No se encontró index.html en el bundle');
                    return;
                }

                let html = indexHtml.source as string;

                // Inyectar título personalizado y scripts
                html = html.replace(
                    '<meta charset="UTF-8" />',
                    `<meta charset="UTF-8" />
    <title>Ecommer | Admin</title>
    <script>
      // Establecer idioma/locale por defecto para nuevos usuarios (sin settings guardados)
      (function() {
        try {
          var key = 'vendure-user-settings';
          if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify({
              displayLanguage: 'es',
              displayLocale: 'CO',
              contentLanguage: 'es',
              theme: 'system',
              displayUiExtensionPoints: false,
              mainNavExpanded: true,
              activeChannelId: '',
              devMode: false,
              hasSeenOnboarding: false,
              tableSettings: {}
            }));
          }
        } catch(e) {}
      })();
    </script>
    <script>
      // Mantener título personalizado aunque el JS de Vendure lo sobreescriba
      Object.defineProperty(document, 'title', {
        set: function(val) {
          // ignorar cualquier cambio al título
        },
        get: function() {
          return 'Ecommer | Admin';
        },
        configurable: true
      });
    </script>
    <script>
        document.addEventListener('click', function(e) {
            const target = e.target;
            const menuButton = target.closest('[data-sidebar="menu-button"]');
            const menuSubButton = target.closest('[data-sidebar="menu-sub-button"]');
            
            if (!menuButton && !menuSubButton) return;
            
            const activeEl = menuButton || menuSubButton;
            const isCollapsibleTrigger = activeEl.getAttribute('data-slot') === 'collapsible-trigger';
            const isDropdownTrigger = activeEl.getAttribute('data-slot') === 'dropdown-menu-trigger';
            
            if (!isCollapsibleTrigger && !isDropdownTrigger) {
            setTimeout(function() {
                const closeBtn = document.querySelector('button.absolute.top-4.right-4');
                if (closeBtn) closeBtn.click();
            }, 50);
            }
        }, true);
        
        // Cerrar sidebar al tocar item dentro de un dropdown
        document.addEventListener('click', function(e) {
          const target = e.target;
          const dropdownItem = target.closest(
            '[data-slot="dropdown-menu-item"], [data-slot="dropdown-menu-radio-item"]'
          );
          
          if (!dropdownItem) return;
          
          setTimeout(function() {
            const closeBtn = document.querySelector('button.absolute.top-4.right-4');
            if (closeBtn) closeBtn.click();
          }, 100);
        }, true);
    </script>
    <style>
      /* Fix: ancho de app en móvil */
      html, body, #app {
        max-width: 100vw;
        overflow-x: hidden;
        width: 100%;
      }

            /* Fix: sidebar-inset no desborde en móvil */
            @media (max-width: 768px) {
                [data-slot="sidebar-inset"] {
                    width: 100% !important;
                    min-width: 0 !important;
                }
            }

            /* Sticky header - solo en displays pequeños */
            @media (max-width: 768px) {
                [data-slot="sidebar-inset"] {
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                    max-height: 100vh;
                }

                [data-slot="sidebar-inset"] header,
                main header {
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    background: var(--background, #fff);
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    flex-shrink: 0;
                }
            }

            /* --- Vendure Dashboard: Fix superposición de labels en gráficos métricas home --- */
            /* Recharts XAxis tick labels: rotar y ajustar en displays pequeños */
            @media (max-width: 768px) {
                .recharts-xAxis .recharts-cartesian-axis-tick-value {
                    transform-box: fill-box;
                    transform-origin: right center;
                    transform: rotate(-45deg);
                    text-anchor: end !important;
                    font-size: 10px;
                }
            }

      /* Ocultar formulario nativo de Vendure condicionalmente */
      body.hide-native-login form > div:not([class*="max-w-sm"]),
      body.hide-native-login form [data-slot="separator"],
      body.hide-native-login form [data-slot="separator-root"],
      body.hide-native-login form [name="username"],
      body.hide-native-login form [name="password"],
      body.hide-native-login form [type="submit"],
      body.hide-native-login form h1,
      body.hide-native-login form > div:not([class*="max-w-sm"]) p.text-muted-foreground,
      body.hide-native-login form [data-slot="input-group"] {
          display: none !important;
      }
    </style>`
                );

                // Actualizar el bundle con el HTML modificado
                indexHtml.source = html;
            }
        },
    ],
    resolve: {
        alias: {
            // This allows all plugins to reference a shared set of
            // GraphQL types.
            '@/gql': `${__dirname}/src/gql/graphql.ts`,
        },
    },
});