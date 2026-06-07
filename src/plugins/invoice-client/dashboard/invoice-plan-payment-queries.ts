export {
    PAYMENT_METHODS,
    isRecurrent,
    isManual,
} from '../../wompi-subscription/dashboard/graphql-queries';

export const CREATE_PENDING_INVOICE_PLAN = `
  mutation CreatePendingInvoicePlanPurchase($planCode: String!, $paymentMethod: String!) {
    createPendingInvoicePlanPurchase(planCode: $planCode, paymentMethod: $paymentMethod) {
      reference
      transactionStatus
      asyncPaymentUrl
      qrImage
      transactionId
      applied
      billingPlanState {
        invoicesRemaining
        purchaseHistory {
          purchasedAt
          planCode
          planName
          invoicesAdded
          priceCop
          paymentReference
          source
        }
      }
    }
  }
`;

export const PURCHASE_INVOICE_PLAN_WITH_PAYMENT = `
  mutation PurchaseInvoicePlanWithPayment(
    $planCode: String!
    $paymentMethod: String!
    $token: String!
    $sessionId: String
    $deviceId: String
  ) {
    purchaseInvoicePlanWithPayment(
      planCode: $planCode
      paymentMethod: $paymentMethod
      token: $token
      sessionId: $sessionId
      deviceId: $deviceId
    ) {
      reference
      transactionStatus
      applied
      billingPlanState {
        invoicesRemaining
        purchaseHistory {
          purchasedAt
          planCode
          planName
          invoicesAdded
          priceCop
          paymentReference
          source
        }
      }
    }
  }
`;

export type InvoicePlanPendingResult = {
    reference: string;
    transactionStatus: string | null;
    asyncPaymentUrl: string | null;
    qrImage: string | null;
    transactionId: string | null;
    applied: boolean;
};
