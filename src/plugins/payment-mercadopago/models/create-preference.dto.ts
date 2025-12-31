/**
 * DTO para crear una preferencia de Mercado Pago
 */
export interface CreatePreferenceDto {
  productos: ProductoItem[];
  email?: string;
  userId?: string;
}

export interface ProductoItem {
  id: string;
  title: string;
  description?: string;
  quantity: number;
  unit_price: number;
  currency_id?: string;
}

/**
 * Respuesta de la creación de preferencia
 */
export interface CreatePreferenceResponse {
  preferenceId: string;
  init_point: string;
}
