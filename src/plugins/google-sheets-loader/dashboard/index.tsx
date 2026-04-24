import {
    Button,
    defineDashboardExtension,
    Page,
    PageBlock,
    PageLayout,
    PageTitle,
} from '@vendure/dashboard';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import { ImportFormatGuide } from './components/import-format-guide';

type ImportProduct = {
    sku: string;
    name: string;
    description?: string;
    price: number;
    stock: number;
};

const IMPORT_PRODUCTS_MUTATION = `
  mutation ImportProductsFromExcel($products: [ImportProductInput!]!, $channelToken: String!) {
    importProductsFromExcel(products: $products, channelToken: $channelToken) {
      success
      message
      importedCount
      updatedCount
      failedCount
      skippedCount
      errors {
        sku
        error
      }
      skipped {
        sku
        reason
      }
    }
  }
`;

export default defineDashboardExtension({
    routes: [
        {
            path: '/excel-product-import',
            loader: () => ({ breadcrumb: 'Importar productos (Excel)' }),
            navMenuItem: {
                id: 'excel-product-import',
                title: 'Importar productos (Excel)',
                sectionId: 'catalog',
            },
            component: ExcelImportPage,
        },
    ],
});

function ExcelImportPage() {
    const [products, setProducts] = useState<ImportProduct[]>([]);
    const [status, setStatus] =
        useState<'idle' | 'ready' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const handleFile = async (file: File) => {
        setStatus('loading');

        try {
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data);
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(sheet, {
                header: ['sku', 'name', 'description', 'price', 'stock'],
                range: 1,
                defval: null,
            });


            const parsed: ImportProduct[] = rows.map((row: any, index) => {
                if (
                    !row.sku ||
                    !row.name ||
                    row.price === null ||
                    row.stock === null
                ) {
                    throw new Error(`Fila ${index + 2}: faltan campos obligatorios`);
                }

                return {
                    sku: String(row.sku).trim(),
                    name: String(row.name).trim(),
                    description: row.description ? String(row.description).trim() : undefined,
                    price: Number(row.price),
                    stock: Number(row.stock),
                };
            });


            setProducts(parsed);
            setStatus('ready');
            setMessage(`Se cargaron ${parsed.length} productos`);
        } catch (e: any) {
            setStatus('error');
            setMessage(e.message || 'Error leyendo el archivo');
        }
    };

    const handleUpload = async () => {
        setStatus('loading');
        const channelToken = localStorage.getItem('vendure-selected-channel-token')?.replace(/"/g, '');

        if (!channelToken) {
            setStatus('error');
            setMessage('No se encontró el token del canal. Recarga la página.');
            return;
        }

        try {
            const response = await fetch('/admin-api/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    query: IMPORT_PRODUCTS_MUTATION,
                    variables: {
                        products,
                        channelToken,
                    },
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const json = await response.json();

            if (json.errors) {
                throw new Error(json.errors[0].message || 'GraphQL error');
            }

            const result = json.data?.importProductsFromExcel;
            if (result) {
                setStatus('success');
                let detailedMessage = result.message;
                if (result.errors && result.errors.length > 0) {
                    detailedMessage += `\n\nErrores:\n${result.errors.map((e: any) => `- ${e.sku}: ${e.error}`).join('\n')}`;
                }
                if (result.skipped && result.skipped.length > 0) {
                    detailedMessage += `\n\nSaltados:\n${result.skipped.map((s: any) => `- ${s.sku}: ${s.reason}`).join('\n')}`;
                }
                setMessage(detailedMessage);
                setProducts([]);
            } else {
                throw new Error('No se recibió respuesta del servidor');
            }
        } catch (e: any) {
            setStatus('error');
            setMessage(e.message || 'Error al importar');
        }
    };

    return (
        <Page pageId="excel-import-page">
            <PageTitle>Importar productos desde Excel</PageTitle>

            <PageLayout>
                <PageBlock column="main">
                    <div className="space-y-4">
                        <Button type='button' variant='default'>
                            <input
                                type="file"
                                accept=".xlsx, .xls, .xlsm, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, application/vnd.ms-excel.sheet.macroEnabled.12"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        handleFile(file);
                                    }
                                }}
                                style={{
                                    cursor: "pointer"
                                }}
                            />
                        </Button>

                        {status === 'ready' && (
                            <Button variant="outline" onClick={handleUpload}>
                                Importar {products.length} productos
                            </Button>
                        )}

                        {message && (
                            <div
                                className={`p-3 rounded ${status === 'error'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-green-100 text-green-800'
                                    }`}
                            >
                                {message}
                            </div>
                        )}
                    </div>

                    <ImportFormatGuide />
                </PageBlock>
            </PageLayout>
        </Page>
    );
}
