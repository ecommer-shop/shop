export {
    PAYMENT_METHODS,
    isRecurrent,
    isManual,
} from '../../wompi-subscription/dashboard/graphql-queries';

export const CREATE_PENDING_INVOICE_PLAN = `
  mutation CreatePendingInvoicePlanPurchase(
    $planCode: String!
    $paymentMethod: String!
    $clickwrapAccepted: Boolean!
    $contractVersion: String!
  ) {
    createPendingInvoicePlanPurchase(
      planCode: $planCode
      paymentMethod: $paymentMethod
      clickwrapAccepted: $clickwrapAccepted
      contractVersion: $contractVersion
    ) {
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
    $clickwrapAccepted: Boolean!
    $contractVersion: String!
    $sessionId: String
    $deviceId: String
  ) {
    purchaseInvoicePlanWithPayment(
      planCode: $planCode
      paymentMethod: $paymentMethod
      token: $token
      clickwrapAccepted: $clickwrapAccepted
      contractVersion: $contractVersion
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

export const CHECK_INVOICE_PLAN_PURCHASE_STATUS = `
  mutation CheckInvoicePlanPurchaseStatus($reference: String!, $transactionId: String) {
    checkInvoicePlanPurchaseStatus(reference: $reference, transactionId: $transactionId) {
      reference
      transactionStatus
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

export const CREATE_PENDING_BILLING_CERTIFICATE = `
  mutation CreatePendingBillingCertificatePayment(
    $paymentMethod: String!
    $clickwrapAccepted: Boolean!
    $contractVersion: String!
  ) {
    createPendingBillingCertificatePayment(
      paymentMethod: $paymentMethod
      clickwrapAccepted: $clickwrapAccepted
      contractVersion: $contractVersion
    ) {
      reference
      transactionStatus
      asyncPaymentUrl
      qrImage
      transactionId
      applied
    }
  }
`;

export const PURCHASE_BILLING_CERTIFICATE_WITH_PAYMENT = `
  mutation PurchaseBillingCertificateWithPayment(
    $paymentMethod: String!
    $token: String!
    $clickwrapAccepted: Boolean!
    $contractVersion: String!
    $sessionId: String
    $deviceId: String
  ) {
    purchaseBillingCertificateWithPayment(
      paymentMethod: $paymentMethod
      token: $token
      clickwrapAccepted: $clickwrapAccepted
      contractVersion: $contractVersion
      sessionId: $sessionId
      deviceId: $deviceId
    ) {
      reference
      transactionStatus
      applied
      transactionId
    }
  }
`;

export const CHECK_BILLING_CERTIFICATE_PAYMENT_STATUS = `
  mutation CheckBillingCertificatePaymentStatus($reference: String!, $transactionId: String) {
    checkBillingCertificatePaymentStatus(reference: $reference, transactionId: $transactionId) {
      reference
      transactionStatus
      transactionId
      applied
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
