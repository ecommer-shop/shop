export const STORES_LIST_QUERY = `
  query StoresList($options: StoreListWithTotalsListOptions) {
    storesList(options: $options) {
      items {
        id
        storeName
        channelCode
        createdAt
        updatedAt
        deletedAt
        isNew
        isDeleted
        adminName
        adminEmail
        adminLastLogin
        productCount
        storeDescription
        storePickupAddress
        storePickupNeighborhood
      }
      totalItems
      totalActiveStores
    }
  }
`;

export const STORES_QUERY = `
  query Stores($first: Int!, $after: String, $filter: StoreFilterInput) {
    stores(first: $first, after: $after, filter: $filter) {
      edges {
        cursor
        node {
          id
          storeName
          channelCode
          createdAt
          updatedAt
          deletedAt
          isNew
          isDeleted
          adminName
          adminEmail
          adminLastLogin
          productCount
          storeDescription
          storeBannerUrl
          storePickupAddress
          storePickupNeighborhood
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalItems
      totalActiveStores
    }
  }
`;

export const STORE_QUERY = `
  query Store($id: ID!) {
    store(id: $id) {
      id
      storeName
      channelCode
      channelToken
      createdAt
      updatedAt
      deletedAt
      isNew
      isDeleted
      adminName
      adminEmail
      adminLastLogin
      productCount
      storeDescription
      storeBannerUrl
      storePickupAddress
      storePickupNeighborhood
    }
  }
`;

export interface StoreNode {
  id: string;
  storeName: string;
  channelCode: string;
  channelToken?: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  isNew: boolean;
  isDeleted: boolean;
  adminName?: string | null;
  adminEmail?: string | null;
  adminLastLogin?: string | null;
  productCount?: number | null;
  storeDescription?: string | null;
  storeBannerUrl?: string | null;
  storePickupAddress?: string | null;
  storePickupNeighborhood?: string | null;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
  endCursor?: string | null;
}

export interface StoreEdge {
  cursor: string;
  node: StoreNode;
}

export interface StoreConnection {
  edges: StoreEdge[];
  pageInfo: PageInfo;
  totalItems: number;
  totalActiveStores: number;
}

export interface StoreList {
  items: StoreNode[];
  totalItems: number;
}

export async function gql<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const res = await fetch('/admin-api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data as T;
}

export function formatDate(dateStr?: string | null): string {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
