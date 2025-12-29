import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

interface WompiRefundResponse {
  id: string;
  status: string;
  amount_in_cents: number;
}

@Injectable()
export class WompiRefundService {
  async refundTransaction(
    apiUrl: string,
    privateKey: string,
    transactionId: string,
    amountInCents: number,
  ): Promise<WompiRefundResponse> {
    console.log('[WOMPI REFUND SERVICE] Sending refund request', {
      url: `${apiUrl}/transactions/${transactionId}/refunds`,
      amountInCents,
    });
    const response = await fetch(
      `${apiUrl}/transactions/${transactionId}/refunds`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${privateKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount_in_cents: amountInCents,
        }),
      },
    );

    let data: any;
    try {
      data = await response.json();
      console.log('[WOMPI REFUND SERVICE] Wompi response', {
        status: response.status,
        data,
      });
    } catch {
      data = null;
    }

    if (!response.ok) {
      throw new Error(
        `Wompi refund failed [${response.status}]: ${
          data?.error?.reason ?? response.statusText
        }`,
      );
    }

    return data;
  }
}