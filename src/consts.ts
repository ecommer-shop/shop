import { Permission } from "@vendure/core";

export const ROUTE = {
  Admin: "admin",
  AdminApi: "admin-api",
  Assets: "assets",
  Mailbox: "mailbox",
  Shop: "shop",
  ShopApi: "shop-api",
} as const;

const RouteModuleStore = {
  account: "/account",
  checkout: "/checkout",
} as const;

export const ROUTE_STORE = {
  account: {
    verify: `${RouteModuleStore.account}/verify`,
    resetPassword: `${RouteModuleStore.account}/reset-password`,
    changeEmailAddress: `${RouteModuleStore.account}/verify-email-address-change`,
  },
  checkout: {
    order: `${RouteModuleStore.checkout}/order`,
    orders: `${RouteModuleStore.checkout}/orders`,
    addressBook: `${RouteModuleStore.checkout}/address-book`,
    details: `${RouteModuleStore.checkout}/details`,
    changeCredentials: `${RouteModuleStore.checkout}/change-credentials`,
    singIn: `${RouteModuleStore.checkout}/sign-in`,
    register: `${RouteModuleStore.checkout}/register`,
    verify: `${RouteModuleStore.checkout}/verify`,
    resetPassword: `${RouteModuleStore.checkout}/reset-password`,
    forgottenPassword: `${RouteModuleStore.checkout}/forgotten-password`,
    changeEmailAddress: `${RouteModuleStore.checkout}/change-email-address`,
  },
  search: "/search",
  product: "/product",
  category: "/category",
} as const;
