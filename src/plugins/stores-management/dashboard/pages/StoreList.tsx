import { useState, useRef, useEffect } from 'react';
import {
    ListPage,
    DetailPageButton,
} from '@vendure/dashboard';
import { graphql } from '@/gql';
import { Store as StoreIcon } from 'lucide-react';
import {
    gql,
} from '../graphql-queries';
import { BadgeNuevo } from '../components/BadgeNuevo';
import { BadgeDeleted } from '../components/BadgeDeleted';

const storeListDocument = graphql(`
    query StoreList($options: StoreListWithTotalsListOptions) {
        storesList(options: $options) {
            items {
                id
                storeName
                channelCode
                createdAt
                isNew
                isDeleted
                adminName
                adminEmail
                adminLastLogin
                productCount
            }
            totalItems
            totalActiveStores
        }
    }
`);

const STORE_TOTALS_QUERY = `
  query StoreTotals($options: StoreListWithTotalsListOptions) {
    storesList(options: $options) {
      totalItems
      totalActiveStores
    }
  }
`;

export function StoreList({ route }: { route: any }) {
    const [filterNew, setFilterNew] = useState(false);
    const [filterDeleted, setFilterDeleted] = useState<boolean | undefined>(undefined);
    const [refreshKey, setRefreshKey] = useState(0);
    const filterRef = useRef({ isNew: undefined as boolean | undefined, isDeleted: undefined as boolean | undefined });
    const [totals, setTotals] = useState({ totalItems: 0, totalActiveStores: 0 });

    useEffect(() => {
        const filter: Record<string, any> = {};
        if (filterNew) filter.isNew = true;
        if (filterDeleted !== undefined) filter.isDeleted = filterDeleted;

        gql<{ storesList: { totalItems: number; totalActiveStores: number } }>(
            STORE_TOTALS_QUERY,
            { options: { take: 1, filter: Object.keys(filter).length > 0 ? filter : undefined } },
        )
            .then(data => setTotals(data.storesList))
            .catch(() => {});
    }, [filterNew, filterDeleted]);

    const toggleFilterNew = () => {
        const next = !filterRef.current.isNew;
        filterRef.current.isNew = next || undefined;
        setFilterNew(!!next);
        setRefreshKey(k => k + 1);
    };

    const toggleFilterDeleted = () => {
        const current = filterRef.current.isDeleted;
        const next = current === undefined ? true : current === true ? false : undefined;
        filterRef.current.isDeleted = next;
        setFilterDeleted(next);
        setRefreshKey(k => k + 1);
    };

    const ListPageComponent = ListPage as any;

    return (
        <ListPageComponent
            key={refreshKey}
            pageId="store-list"
            title="Gestión de Tiendas"
            listQuery={storeListDocument}
            route={route}
            transformVariables={(vars: any) => ({
                ...vars,
                options: {
                    ...vars.options,
                    filter: {
                        ...vars.options?.filter,
                        isNew: filterRef.current.isNew,
                        isDeleted: filterRef.current.isDeleted,
                    },
                },
            })}
            customizeColumns={{
                storeName: {
                    cell: ({ row }: any) => (
                        <DetailPageButton id={row.original.id} label={row.original.storeName} />
                    ),
                },
                channelCode: {
                    cell: ({ row }: any) => <span className="text-muted-foreground">{row.original.channelCode}</span>,
                },
                adminName: {
                    cell: ({ row }: any) => row.original.adminName ?? <span className="text-muted-foreground/50">—</span>,
                },
                adminEmail: {
                    cell: ({ row }: any) => row.original.isDeleted
                        ? <span className="italic text-muted-foreground/60">{row.original.adminEmail}</span>
                        : (row.original.adminEmail ?? <span className="text-muted-foreground/50">—</span>),
                },
                productCount: {
                    cell: ({ row }: any) => <div className="text-center">{row.original.productCount ?? '—'}</div>,
                },
                isNew: {
                    header: '',
                    cell: ({ row }: any) => (
                        row.original.isNew && !row.original.isDeleted ? <BadgeNuevo /> : null
                    ),
                    enableSorting: false,
                },
                isDeleted: {
                    header: '',
                    cell: ({ row }: any) => (
                        row.original.isDeleted ? <BadgeDeleted /> : null
                    ),
                    enableSorting: false,
                },
                createdAt: {
                    cell: ({ row }: any) => {
                        const d = row.original.createdAt ? new Date(row.original.createdAt) : null;
                        return (
                            <span className="text-muted-foreground text-xs">
                                {d ? d.toLocaleDateString('es-CO', {
                                    year: 'numeric', month: 'short', day: 'numeric',
                                    hour: '2-digit', minute: '2-digit',
                                }) : '—'}
                            </span>
                        );
                    },
                },
            }}
            defaultColumnOrder={['storeName', 'channelCode', 'adminName', 'adminEmail', 'productCount', 'isDeleted', 'isNew', 'createdAt']}
            defaultVisibility={{ adminEmail: false, isNew: true, isDeleted: true }}
        >
            <div className="flex items-center justify-between w-full gap-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <StoreIcon className="h-4 w-4" />
                        <strong className="text-foreground">{totals.totalItems}</strong> total
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        <strong className="text-foreground">{totals.totalActiveStores}</strong> activas
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-red-400" />
                        <strong className="text-foreground">{totals.totalItems - totals.totalActiveStores}</strong> eliminadas
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        className={`inline-flex items-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${filterNew ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                        onClick={toggleFilterNew}
                    >
                        Nuevas
                    </button>
                    <button
                        className={`inline-flex items-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${filterDeleted === true ? 'bg-destructive text-destructive-foreground' : filterDeleted === false ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                        onClick={toggleFilterDeleted}
                    >
                        {filterDeleted === undefined ? 'Estado' : filterDeleted ? 'Eliminadas' : 'Activas'}
                    </button>
                </div>
            </div>
        </ListPageComponent>
    );
}
