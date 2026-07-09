export interface Command {
    id: string;
    label: string;
    keywords: string[];
    path: string;
    section: string;
}

const SECTIONS = [
    'Inicio',
    'Catálogo',
    'Ventas',
    'Clientes',
    'Marketing',
    'Configuración',
    'Sistema',
    'Perfil',
    'Acciones',
] as const;

export type CommandSection = (typeof SECTIONS)[number];

export const ALL_COMMANDS: Command[] = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        keywords: ['inicio', 'home', 'panel', 'principal'],
        path: '/',
        section: 'Inicio',
    },
    {
        id: 'products',
        label: 'Productos',
        keywords: ['producto', 'listado', 'catalogo', 'inventario'],
        path: '/products',
        section: 'Catálogo',
    },
    {
        id: 'product-variants',
        label: 'Variantes de Producto',
        keywords: ['variante', 'sku', 'precio', 'stock'],
        path: '/product-variants',
        section: 'Catálogo',
    },
    {
        id: 'option-groups',
        label: 'Grupos de Opciones',
        keywords: ['opcion', 'atributo', 'talla', 'color', 'tamano'],
        path: '/option-groups',
        section: 'Catálogo',
    },
    {
        id: 'facets',
        label: 'Facetas',
        keywords: ['filtro', 'categoria', 'etiqueta', 'tag'],
        path: '/facets',
        section: 'Catálogo',
    },
    {
        id: 'collections',
        label: 'Colecciones',
        keywords: ['coleccion', 'agrupacion', 'categoria'],
        path: '/collections',
        section: 'Catálogo',
    },
    {
        id: 'assets',
        label: 'Archivos',
        keywords: ['asset', 'imagen', 'imagenes', 'foto', 'multimedia'],
        path: '/assets',
        section: 'Catálogo',
    },
    {
        id: 'reviews',
        label: 'Reviews',
        keywords: ['resena', 'opinion', 'comentario', 'valoracion', 'calificacion'],
        path: '/reviews',
        section: 'Catálogo',
    },
    {
        id: 'ai-chat',
        label: 'Asistente IA',
        keywords: ['ia', 'inteligencia', 'artificial', 'chat', 'simetria', 'ayuda'],
        path: '/ai-chat',
        section: 'Catálogo',
    },
    {
        id: 'excel-product-import',
        label: 'Importar Productos (Excel)',
        keywords: ['excel', 'importar', 'cargar', 'masivo', 'xlsx', 'hoja', 'calculo'],
        path: '/excel-product-import',
        section: 'Catálogo',
    },
    {
        id: 'orders',
        label: 'Pedidos',
        keywords: ['orden', 'venta', 'compra', 'factura'],
        path: '/orders',
        section: 'Ventas',
    },
    {
        id: 'metrics',
        label: 'Métricas Avanzadas',
        keywords: ['analisis', 'estadistica', 'reporte', 'grafico', 'dashboard'],
        path: '/metrics',
        section: 'Ventas',
    },
    {
        id: 'customers',
        label: 'Clientes',
        keywords: ['cliente', 'comprador', 'usuario', 'persona'],
        path: '/customers',
        section: 'Clientes',
    },
    {
        id: 'customer-groups',
        label: 'Grupos de Clientes',
        keywords: ['grupo', 'segmento', 'clasificacion'],
        path: '/customer-groups',
        section: 'Clientes',
    },
    {
        id: 'promotions',
        label: 'Promociones',
        keywords: ['promocion', 'descuento', 'oferta', 'cupon'],
        path: '/promotions',
        section: 'Marketing',
    },
    {
        id: 'sellers',
        label: 'Vendedores',
        keywords: ['vendedor', 'tienda', 'seller', 'comerciante'],
        path: '/sellers',
        section: 'Configuración',
    },
    {
        id: 'channels',
        label: 'Canales',
        keywords: ['canal', 'multitienda', 'multi'],
        path: '/channels',
        section: 'Configuración',
    },
    {
        id: 'stock-locations',
        label: 'Ubicaciones de Stock',
        keywords: ['stock', 'bodega', 'almacen', 'inventario', 'ubicacion'],
        path: '/stock-locations',
        section: 'Configuración',
    },
    {
        id: 'administrators',
        label: 'Administradores',
        keywords: ['admin', 'administrador', 'usuario', 'acceso'],
        path: '/administrators',
        section: 'Configuración',
    },
    {
        id: 'roles',
        label: 'Roles',
        keywords: ['rol', 'permiso', 'acceso', 'autorizacion'],
        path: '/roles',
        section: 'Configuración',
    },
    {
        id: 'shipping-methods',
        label: 'Métodos de Envío',
        keywords: ['envio', 'domicilio', 'entrega', 'mensajeria', 'shipping'],
        path: '/shipping-methods',
        section: 'Configuración',
    },
    {
        id: 'payment-methods',
        label: 'Métodos de Pago',
        keywords: ['pago', 'pagos', 'wompi', 'tarjeta', 'bancolombia', 'nequi'],
        path: '/payment-methods',
        section: 'Configuración',
    },
    {
        id: 'tax-categories',
        label: 'Categorías de Impuestos',
        keywords: ['impuesto', 'iva', 'categoria', 'tax'],
        path: '/tax-categories',
        section: 'Configuración',
    },
    {
        id: 'tax-rates',
        label: 'Tasas de Impuestos',
        keywords: ['tasa', 'iva', 'porcentaje', 'impuesto'],
        path: '/tax-rates',
        section: 'Configuración',
    },
    {
        id: 'countries',
        label: 'Países',
        keywords: ['pais', 'paises', 'colombia', 'nacionalidad'],
        path: '/countries',
        section: 'Configuración',
    },
    {
        id: 'zones',
        label: 'Zonas',
        keywords: ['zona', 'region', 'departamento', 'ciudad'],
        path: '/zones',
        section: 'Configuración',
    },
    {
        id: 'global-settings',
        label: 'Configuración Global',
        keywords: ['global', 'general', 'sistema', 'config'],
        path: '/global-settings',
        section: 'Configuración',
    },
    {
        id: 'feedback',
        label: 'Retroalimentación',
        keywords: ['feedback', 'opinion', 'sugerencia', 'encuesta', 'formulario'],
        path: '/feedback',
        section: 'Configuración',
    },
    {
        id: 'billing',
        label: 'Facturación y Plan',
        keywords: ['factura', 'plan', 'suscripcion', 'pago', 'billing', 'cobro'],
        path: '/billing',
        section: 'Configuración',
    },
    {
        id: 'store-management',
        label: 'Tiendas',
        keywords: ['tienda', 'store', 'vendedor', 'listado'],
        path: '/stores',
        section: 'Configuración',
    },
    {
        id: 'store-analytics',
        label: 'Analíticas de Tiendas',
        keywords: ['analitica', 'tienda', 'reporte', 'estadistica', 'vendedor'],
        path: '/store-analytics',
        section: 'Configuración',
    },
    {
        id: 'job-queue',
        label: 'Cola de Trabajos',
        keywords: ['trabajo', 'job', 'cola', 'proceso', 'tarea'],
        path: '/job-queue',
        section: 'Sistema',
    },
    {
        id: 'scheduled-tasks',
        label: 'Tareas Programadas',
        keywords: ['tarea', 'programada', 'cron', 'automatico', 'scheduler'],
        path: '/scheduled-tasks',
        section: 'Sistema',
    },
    {
        id: 'settings-store',
        label: 'Configuración de Tienda',
        keywords: ['config', 'tienda', 'ajustes', 'store', 'settings'],
        path: '/settings-store',
        section: 'Sistema',
    },
    {
        id: 'api-keys',
        label: 'API Keys',
        keywords: ['api', 'key', 'llave', 'token', 'acceso', 'integracion'],
        path: '/api-keys',
        section: 'Sistema',
    },
    {
        id: 'profile',
        label: 'Mi Perfil',
        keywords: ['perfil', 'usuario', 'cuenta', 'ajustes', 'personal'],
        path: '/profile',
        section: 'Perfil',
    },
    {
        id: 'ask-ai',
        label: 'Preguntar a SimetrIA',
        keywords: ['ia', 'simetria', 'preguntar', 'ayuda', 'duda', 'consulta', 'chat', 'gpt', 'inteligencia', 'artificial'],
        path: '',
        section: 'Acciones',
    },
];

export const SECTION_LABELS: Record<string, string> = {
    'Inicio': 'Inicio',
    'Catálogo': 'Catálogo',
    'Ventas': 'Ventas',
    'Clientes': 'Clientes',
    'Marketing': 'Marketing',
    'Configuración': 'Configuración',
    'Sistema': 'Sistema',
    'Perfil': 'Perfil',
    'Acciones': 'Acciones',
};

export function getCommandsBySection(): Record<string, Command[]> {
    const grouped: Record<string, Command[]> = {};
    for (const cmd of ALL_COMMANDS) {
        if (!grouped[cmd.section]) {
            grouped[cmd.section] = [];
        }
        grouped[cmd.section].push(cmd);
    }
    return grouped;
}
