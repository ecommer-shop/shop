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
        description: 'Precio numerico sin simbolo de moneda',
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

    const downloadMacroTemplate = async () => {
        const response = await fetch(MACRO_TEMPLATE_URL);
        if (!response.ok) {
            throw new Error(
                response.status === 404
                    ? 'La plantilla .xlsm no está disponible aún. Contacta al administrador.'
                    : `Error del servidor (${response.status}) al descargar la plantilla.`
            );
        }

        const macroBlob = await response.blob();
        const objectUrl = URL.createObjectURL(macroBlob);
        const link = document.createElement('a');
        link.href = objectUrl;
        link.download = 'plantilla-importacion-productos.xlsm';
        link.click();
        URL.revokeObjectURL(objectUrl);
    };

    const handleTemplateDownload = async () => {
        setDownloadError('');

        if (templateFormat === 'xlsm') {
            try {
                await downloadMacroTemplate();
            } catch (error: any) {
                setDownloadError(error.message || 'Error descargando la plantilla .xlsm.');
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
                    {downloadError && (
                        <p className="text-xs text-destructive">{downloadError}</p>
                    )}
                </div>
            </div>

            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Crea un archivo Excel (.xlsx, .xls, .xlsm) o CSV con esos encabezados.</li>
                <li>Completa una fila por producto, sin dejar vacios sku, name, price ni stock.</li>
                <li>Usa valores numericos en price y stock (sin simbolos ni texto extra).</li>
                <li>Guarda el archivo y cargalo desde el boton de esta pantalla.</li>
            </ol>

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
                <p className="mb-2 text-sm font-medium text-foreground">Imagen ilustrativa:</p>
                <svg
                    viewBox="0 0 980 210"
                    role="img"
                    aria-label="Ejemplo visual de columnas requeridas en Excel o CSV"
                    className="h-auto w-full text-muted-foreground"
                >
                    <rect x="1" y="1" width="978" height="208" fill="none" stroke="currentColor" opacity="0.35" />
                    <rect x="1" y="1" width="978" height="44" fill="currentColor" opacity="0.08" stroke="currentColor" />

                    <line x1="196" y1="1" x2="196" y2="209" stroke="currentColor" opacity="0.35" />
                    <line x1="392" y1="1" x2="392" y2="209" stroke="currentColor" opacity="0.35" />
                    <line x1="588" y1="1" x2="588" y2="209" stroke="currentColor" opacity="0.35" />
                    <line x1="784" y1="1" x2="784" y2="209" stroke="currentColor" opacity="0.35" />
                    <line x1="1" y1="106" x2="979" y2="106" stroke="currentColor" opacity="0.35" />

                    <text x="98" y="29" textAnchor="middle" fontSize="16" fontWeight="700" fill="currentColor">sku *</text>
                    <text x="294" y="29" textAnchor="middle" fontSize="16" fontWeight="700" fill="currentColor">name *</text>
                    <text x="490" y="29" textAnchor="middle" fontSize="16" fontWeight="700" fill="currentColor">description</text>
                    <text x="686" y="29" textAnchor="middle" fontSize="16" fontWeight="700" fill="currentColor">price *</text>
                    <text x="882" y="29" textAnchor="middle" fontSize="16" fontWeight="700" fill="currentColor">stock *</text>

                    <text x="98" y="82" textAnchor="middle" fontSize="14" fill="currentColor">SKU-001</text>
                    <text x="294" y="82" textAnchor="middle" fontSize="14" fill="currentColor">Camiseta Algodon Blanca</text>
                    <text x="490" y="82" textAnchor="middle" fontSize="14" fill="currentColor">Tela suave, manga corta</text>
                    <text x="686" y="82" textAnchor="middle" fontSize="14" fill="currentColor">89900</text>
                    <text x="882" y="82" textAnchor="middle" fontSize="14" fill="currentColor">25</text>

                    <text x="98" y="156" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.85">SKU-002</text>
                    <text x="294" y="156" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.85">Jean Regular Azul</text>
                    <text x="490" y="156" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.85">Denim stretch</text>
                    <text x="686" y="156" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.85">129900</text>
                    <text x="882" y="156" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.85">14</text>
                </svg>
            </div>
        </section>
    );
}