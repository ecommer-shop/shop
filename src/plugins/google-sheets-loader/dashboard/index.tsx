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
type ImportProduct = {
    sku: string;
    name: string;
    description?: string;
};

const IMPORT_PRODUCTS_MUTATION = `
  mutation ImportProductsFromExcel($products: [ImportProductInput!]!) {
    importProductsFromExcel(products: $products) {
      success
      message
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
            const rows = XLSX.utils.sheet_to_json<any>(sheet);

            const parsed: ImportProduct[] = rows.map((row, index) => {
                if (!row.sku || !row.name) {
                    throw new Error(`Fila ${index + 2}: falta sku o name`);
                }
                return {
                    sku: String(row.sku),
                    name: String(row.name),
                    description: row.description ? String(row.description) : undefined,
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
                setMessage(result.message);
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
                        <input
                            type="file"
                            accept=".xlsx,.xls"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    handleFile(file);
                                }
                            }}
                        />

                        {status === 'ready' && (
                            <Button onClick={handleUpload}>
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
                </PageBlock>
            </PageLayout>
        </Page>
    );
}
