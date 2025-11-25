// src/config/mercadopago.config.ts

import MercadoPagoConfig from "mercadopago";
import { IS_DEV } from "./environment";

type MercadoPagoMode = "sandbox" | "production";

const MODE: MercadoPagoMode = IS_DEV ? "sandbox" : "production";

// Determinar token
const ACCESS_TOKEN =
  MODE === "sandbox"
    ? process.env.MP_ACCESS_TOKEN_SANDBOX || process.env.MP_ACCESS_TOKEN
    : process.env.MP_ACCESS_TOKEN;

// Determinar public key (solo útil para frontend)
const PUBLIC_KEY =
  MODE === "sandbox"
    ? process.env.MP_PUBLIC_KEY_SANDBOX || process.env.MP_PUBLIC_KEY
    : process.env.MP_PUBLIC_KEY;

const missingVars: string[] = [];
if (!ACCESS_TOKEN) missingVars.push("MP_ACCESS_TOKEN / MP_ACCESS_TOKEN_SANDBOX");
if (!PUBLIC_KEY) missingVars.push("MP_PUBLIC_KEY / MP_PUBLIC_KEY_SANDBOX");

let mercadoPagoClient: MercadoPagoConfig | null = null;

if (missingVars.length > 0) {
  console.error(
    `[MercadoPago] ERROR: faltan variables de entorno: ${missingVars.join(", ")}`
  );
} else {
  mercadoPagoClient = new MercadoPagoConfig({
    accessToken: ACCESS_TOKEN as string,
  });

  console.log(`[MercadoPago] Inicializado en modo ${MODE.toUpperCase()}`);
}

export const mercadoPagoConfig = {
  mode: MODE,
  client: mercadoPagoClient,
  publicKey: PUBLIC_KEY,
};

/**
 * Asegura que MP esté configurado antes de crear preferencias
 */
export function assertMercadoPagoReady() {
  if (!mercadoPagoClient) {
    throw new Error(
      "Mercado Pago no está configurado correctamente. Revisa las variables de entorno."
    );
  }
}

export { mercadoPagoClient };
