import { Button } from '@vendure/dashboard';
import { useState } from 'react';
import * as XLSX from 'xlsx';

type FieldSpec = {
    key: string;
    required: boolean;
    description: string;
    example: string;
};

type TemplateFormat = 'xlsx' | 'xlsm' | 'xls';

const FIELD_SPECS: FieldSpec[] = [
    {
        key: 'sku',
        required: true,
        description: 'Codigo unico del producto',
        example: 'SKU-001',
    },
    {
        key: 'name',
        required: true,
        description: 'Nombre visible del producto',
        example: 'Camiseta Algodon Blanca',
    },
    {
        key: 'description',
        required: false,
        description: 'Descripcion corta o detalle comercial',
        example: 'Tela suave, manga corta',
    },
    {
        key: 'price',
        required: true,
        description: 'Precio numerico (en .xlsm la macro lo convierte a centavos)',
        example: '89900',
    },
    {
        key: 'stock',
        required: true,
        description: 'Cantidad disponible en inventario',
        example: '25',
    },
];

const TEMPLATE_HEADERS = ['sku', 'name', 'description', 'price', 'stock'];
const MACRO_TEMPLATE_URL = 'https://ecommer-assets.s3.us-east-2.amazonaws.com/plantilla-carga-de-productos-ecommer.xlsm';
const EXAMPLE_IMAGE_DRIVE_URL =
    'https://ecommer-assets.s3.us-east-2.amazonaws.com/ejemplo-carga-products.png';
const EXAMPLE_IMAGE_URL =
    'https://ecommer-assets.s3.us-east-2.amazonaws.com/ejemplo-carga-products.png';

const TEMPLATE_ROWS = [
    {
        sku: 'SKU-001',
        name: 'Camiseta Algodon Blanca',
        description: 'Tela suave, manga corta',
        price: 89900,
        stock: 25,
    },
    {
        sku: 'SKU-002',
        name: 'Jean Regular Azul',
        description: 'Denim stretch',
        price: 129900,
        stock: 14,
    },
];

export function ImportFormatGuide() {
    const [templateFormat, setTemplateFormat] = useState<TemplateFormat>('xlsx');
    const [downloadError, setDownloadError] = useState('');
    const [showExampleImage, setShowExampleImage] = useState(false);
    const [imageLoadError, setImageLoadError] = useState(false);

    const downloadMacroTemplate = () => {
        const link = document.createElement('a');
        link.href = MACRO_TEMPLATE_URL;
        link.download = 'plantilla-importacion-productos.xlsm';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        if (link.parentNode === document.body) {
            document.body.removeChild(link);
        }
    };

    const handleTemplateDownload = async () => {
        setDownloadError('');

        if (templateFormat === 'xlsm') {
            try {
                downloadMacroTemplate();
            } catch (error: any) {
                setDownloadError(
                    error.message ||
                    'No se pudo iniciar la descarga .xlsm. Usa el enlace directo de abajo.'
                );
            }
            return;
        }

        const worksheet = XLSX.utils.json_to_sheet(TEMPLATE_ROWS, {
            header: TEMPLATE_HEADERS,
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Productos');

        const now = new Date();
        const datePart = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        const filename = `plantilla-importacion-productos-${datePart}.${templateFormat}`;

        XLSX.writeFile(workbook, filename, {
            bookType: templateFormat,
        });
    };

    return (
        <section className="rounded-md border border-border bg-background p-4 text-foreground">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                    <h2 className="text-lg font-semibold">
                        Formato requerido para Excel o CSV
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        El archivo debe incluir las columnas en este orden exacto: sku, name,
                        description, price, stock. La primera fila se interpreta como encabezado.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-2 md:w-auto">
                    <label
                        htmlFor="template-format"
                        className="text-xs font-medium text-muted-foreground"
                    >
                        Formato de descarga
                    </label>
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <select
                            id="template-format"
                            value={templateFormat}
                            onChange={(event) => setTemplateFormat(event.target.value as TemplateFormat)}
                            className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                        >
                            <option value="xlsx">Excel (.xlsx)</option>
                            <option value="xlsm">Excel Macro-Enabled (.xlsm)</option>
                            <option value="xls">Excel 97-2003 (.xls)</option>
                        </select>
                        <Button type="button" variant="outline" onClick={handleTemplateDownload}>
                            Descargar plantilla
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Si eliges .xlsm, se descarga la plantilla con macro para formateo de precio y tabla.
                    </p>
                    <a
                        href={MACRO_TEMPLATE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary underline"
                    >
                        Descargar .xlsm directamente
                    </a>
                    {downloadError && (
                        <p className="text-xs text-destructive">{downloadError}</p>
                    )}
                </div>
            </div>

            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Crea un archivo Excel (.xlsx, .xls, .xlsm) o CSV con esos encabezados.</li>
                <li>Completa una fila por producto, sin dejar vacios sku, name, price ni stock.</li>
                <li>Usa valores numericos en price y stock (sin simbolos ni texto extra).</li>
                <li>Usa valores de texto en los demás campos.</li>
                <li>Guarda el archivo y cargalo desde el boton "importar X productos" de esta pantalla.</li>
            </ol>

            <div className="mt-4 rounded-md border border-amber-300/40 bg-amber-50/40 p-3 text-sm text-amber-900 dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-200">
                <p className="font-medium">Importante sobre decimales en la plantilla .xlsm</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                        En la columna <span className="font-mono">price</span>, la macro convierte el valor a
                        centavos multiplicando por 100 y quitando decimales.
                    </li>
                    <li>
                        Ejemplo: si escribes <span className="font-mono">899.90</span>, la celda se convierte a
                        <span className="font-mono"> 89990</span>.
                    </li>
                    <li>
                        Si usas <span className="font-mono">.xlsx</span>, <span className="font-mono">.xls</span>{' '}
                        o <span className="font-mono">.csv</span> (sin macro), debes escribir directamente el valor
                        final en centavos (ejemplo: <span className="font-mono">89990</span>).
                    </li>
                    <li>
                        Evita editar dos veces la misma celda de <span className="font-mono">price</span> en
                        <span className="font-mono"> .xlsm</span>, porque la macro volvera a multiplicar por 100.
                    </li>
                </ul>
            </div>

            <div className="mt-4 overflow-x-auto rounded border border-border">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-muted/40 text-foreground">
                        <tr>
                            <th className="px-3 py-2 font-semibold">Campo</th>
                            <th className="px-3 py-2 font-semibold">Obligatorio</th>
                            <th className="px-3 py-2 font-semibold">Descripcion</th>
                            <th className="px-3 py-2 font-semibold">Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {FIELD_SPECS.map((field) => (
                            <tr key={field.key} className="border-t border-border">
                                <td className="px-3 py-2 font-mono text-xs text-foreground">
                                    {field.key}
                                </td>
                                <td className="px-3 py-2 text-muted-foreground">
                                    {field.required ? 'Si' : 'No'}
                                </td>
                                <td className="px-3 py-2 text-muted-foreground">
                                    {field.description}
                                </td>
                                <td className="px-3 py-2 text-muted-foreground">{field.example}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 rounded border border-dashed border-border p-3">
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-medium text-foreground">Imagen de ejemplo del archivo</p>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowExampleImage((current) => !current)}
                    >
                        cómo subir el archivo
                    </Button>
                </div>

                {showExampleImage && (
                    <div className="mt-3 rounded border border-border p-2">
                        {!imageLoadError ? (
                            <img
                                src={EXAMPLE_IMAGE_URL}
                                alt="Ejemplo de como debe verse el archivo de carga de productos"
                                className="h-auto w-full rounded"
                                loading="lazy"
                                onError={() => setImageLoadError(true)}
                            />
                        ) : (
                            <p className="text-sm text-muted-foreground">
                                No se pudo cargar la vista previa de Google Drive. Puedes abrirla aqui:{' '}
                                <a
                                    href={EXAMPLE_IMAGE_DRIVE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary underline"
                                >
                                    Ver imagen de ejemplo
                                </a>
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}