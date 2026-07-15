export enum PaymentFlowType {
    RECURRENTE = 'RECURRENTE',
    MANUAL = 'MANUAL',
}

export const RECURRENTE_METHODS = ['CARD', 'NEQUI', 'DAVIPLATA', 'BANCOLOMBIA_TRANSFER'] as const;
export const MANUAL_METHODS = ['PSE', 'BANCOLOMBIA_QR', 'BANCOLOMBIA_COLLECT', 'PCOL', 'BANCOLOMBIA_BNPL', 'SU_PLUS'] as const;
export const ALL_PAYMENT_METHODS = [...RECURRENTE_METHODS, ...MANUAL_METHODS] as const;
export type PaymentMethod = typeof ALL_PAYMENT_METHODS[number];

export const PAYMENT_METHOD_FLOW: Record<PaymentMethod, PaymentFlowType> = {
    CARD: PaymentFlowType.RECURRENTE,
    NEQUI: PaymentFlowType.RECURRENTE,
    DAVIPLATA: PaymentFlowType.RECURRENTE,
    BANCOLOMBIA_TRANSFER: PaymentFlowType.RECURRENTE,
    PSE: PaymentFlowType.MANUAL,
    BANCOLOMBIA_QR: PaymentFlowType.MANUAL,
    BANCOLOMBIA_COLLECT: PaymentFlowType.MANUAL,
    PCOL: PaymentFlowType.MANUAL,
    BANCOLOMBIA_BNPL: PaymentFlowType.MANUAL,
    SU_PLUS: PaymentFlowType.MANUAL,
};

export const RECURRENT_METHODS_SET = new Set<string>(RECURRENTE_METHODS);
export const MANUAL_METHODS_SET = new Set<string>(MANUAL_METHODS);
