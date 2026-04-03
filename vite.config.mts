import { vendureDashboardPlugin } from '@vendure/dashboard/vite';
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
                    'secondary-foreground': 'hsl(240 56% 16%)',
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
        {
            name: 'html-title',
            transformIndexHtml(html) {
                return html.replace(
                    '<meta charset="UTF-8" />',
                    `<meta charset="UTF-8" />
    <title>Ecommer | Admin</title>
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
      // Cerrar sidebar móvil al hacer click en item de navegación
      document.addEventListener('click', function(e) {
        const target = e.target;
        const menuButton = target.closest('[data-sidebar="menu-button"]');
        const menuSubButton = target.closest('[data-sidebar="menu-sub-button"]');
        
        if (!menuButton && !menuSubButton) return;
        
        const activeEl = menuButton || menuSubButton;
        const isCollapsibleTrigger = activeEl.getAttribute('data-slot') === 'collapsible-trigger';
        
        if (!isCollapsibleTrigger) {
          setTimeout(function() {
            const closeBtn = document.querySelector('button.absolute.top-4.right-4');
            if (closeBtn) closeBtn.click();
          }, 50);
        }
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
    </style>`
                );
            },
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