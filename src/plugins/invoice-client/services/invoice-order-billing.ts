import type { Order } from '@vendure/core';
import {
  ADDRESS_MATIAS_CITY_ID_FIELD,
  CUSTOMER_DNI_FIELD,
  CUSTOMER_IDENTITY_DOCUMENT_ID_FIELD,
} from '../constants';

export interface InvoiceBillingCustomerData {
  companyName: string;
  dni: string;
  email: string;
  mobile?: string;
  address: string;
  postalCode?: string;
  cityId: string;
  identityDocumentId: string;
}

/** Normaliza documento para Matias/DIAN (alfanumérico, mayúsculas). */
export function normalizeCustomerDni(raw: string): string {
  return raw.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
}

export function isInvalidInvoiceDni(dni: string): boolean {
  if (!dni || dni.length < 5) {
    return true;
  }
  return /^0+$/.test(dni);
}

function readCustomFieldString(
  customFields: Record<string, unknown> | undefined,
  key: string,
): string {
  const raw = customFields?.[key];
  return typeof raw === 'string' ? raw.trim() : '';
}

const MATIAS_CITY_ID_BY_LEGACY_DANE_CODE: Record<string, string> = {
  '05001000': '1',
  '05001': '1',
  '05266000': '47',
  '05266': '47',
  '08001000': '126',
  '08001': '126',
  '11001000': '149',
  '11001': '149',
  '19001000': '362',
  '19001': '362',
  '47001000': '657',
  '47001': '657',
  '76001000': '1006',
  '76001': '1006',
};

function normalizeMatiasCityId(raw: string): string {
  const value = raw.trim();
  return MATIAS_CITY_ID_BY_LEGACY_DANE_CODE[value] ?? value;
}

/**
 * Datos de facturación del comprador. Falla con mensaje claro si falta DNI o ciudad Matias.
 */
export function resolveInvoiceBillingCustomer(order: Order): InvoiceBillingCustomerData {
  const customer = order.customer;
  if (!customer) {
    throw new Error('El pedido no tiene cliente asociado.');
  }

  const billingAddress = order.billingAddress || order.shippingAddress;
  const addressCustomFields = billingAddress?.customFields as Record<string, unknown> | undefined;
  const customerName =
    (customer.firstName && customer.lastName
      ? `${customer.firstName} ${customer.lastName}`
      : customer.firstName || customer.lastName) || 'Cliente';

  const customerCustomFields = customer.customFields as Record<string, unknown> | undefined;
  const dniRaw =
    readCustomFieldString(addressCustomFields, CUSTOMER_DNI_FIELD) ||
    readCustomFieldString(customerCustomFields, CUSTOMER_DNI_FIELD);
  const dni = normalizeCustomerDni(dniRaw);
  if (isInvalidInvoiceDni(dni)) {
    throw new Error(
      'Falta documento de identificación válido del cliente (custom field «dni»). No se usa teléfono ni valores por defecto.',
    );
  }

  const email = customer.emailAddress?.trim();
  if (!email) {
    throw new Error('El cliente debe tener correo electrónico para emitir factura.');
  }

  const address = billingAddress?.streetLine1?.trim();
  if (!address) {
    throw new Error('El pedido debe tener dirección de facturación o envío con calle.');
  }

  const cityFromCustom = readCustomFieldString(
    addressCustomFields,
    ADDRESS_MATIAS_CITY_ID_FIELD,
  );
  const province = billingAddress?.province?.trim() ?? '';
  const cityId = normalizeMatiasCityId(cityFromCustom || (/^\d+$/.test(province) ? province : ''));
  if (!cityId) {
    throw new Error(
      'Falta código de ciudad Matias/DIAN en la dirección (custom field «matiasCityId» en la dirección o «province» numérico).',
    );
  }

  const identityDocumentId =
    readCustomFieldString(addressCustomFields, CUSTOMER_IDENTITY_DOCUMENT_ID_FIELD) ||
    readCustomFieldString(customerCustomFields, CUSTOMER_IDENTITY_DOCUMENT_ID_FIELD) ||
    '1';

  if (!['1', '2', '3', '4', '5'].includes(identityDocumentId)) {
    throw new Error(
      'Tipo de documento inválido para facturación electrónica. Usa CC, CE, NIT, TI o Pasaporte.',
    );
  }

  return {
    companyName: customerName,
    dni,
    email,
    mobile: customer.phoneNumber?.trim() || undefined,
    address,
    postalCode: billingAddress?.postalCode?.trim() || undefined,
    cityId,
    identityDocumentId,
  };
}
