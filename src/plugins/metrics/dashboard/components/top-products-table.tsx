import { Card, CardContent, CardDescription, CardHeader, CardTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@vendure/dashboard';

interface TopProduct {
    productVariantId: string;
    productName: string;
    sku: string;
    quantity: number;
    revenue: number;
}

const formatCurrency = (value: number) =>
    `$${(value / 100).toLocaleString('es-CO', { minimumFractionDigits: 0 })}`;

export function TopProductsTable({ products }: { products: TopProduct[] }) {
    if (products.length === 0) return null;

    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Top 10 Productos</CardTitle>
                <CardDescription>Productos más vendidos por ingresos</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden sm:table-cell">#</TableHead>
                                <TableHead>Producto</TableHead>
                                <TableHead className="hidden sm:table-cell">SKU</TableHead>
                                <TableHead className="text-right">Cantidad</TableHead>
                                <TableHead className="text-right">Ingresos</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product, idx) => (
                                <TableRow key={product.productVariantId}>
                                    <TableCell className="text-muted-foreground hidden sm:table-cell">{idx + 1}</TableCell>
                                    <TableCell className="font-medium text-xs sm:text-sm">{product.productName}</TableCell>
                                    <TableCell className="text-muted-foreground hidden sm:table-cell text-xs sm:text-sm">{product.sku}</TableCell>
                                    <TableCell className="text-right text-xs sm:text-sm">{product.quantity.toLocaleString()}</TableCell>
                                    <TableCell className="text-right font-medium text-xs sm:text-sm">{formatCurrency(product.revenue)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
