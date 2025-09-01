export interface TransactionUpdatedEvent {
   event: 'transaction.updated';
   data: {
      transaction: {
         id: string;
         amountInCents: number;
         status: 'APPROVED' | 'PENDING' | 'VOIDED';
         reference: string; // orderCode
         currency: 'COP';
         orderCode: string;
      };
   };
   signature: {
      // If this list is always exactly these three, consider using a tuple type:
      // readonly ['transaction.id', 'transaction.status', 'transaction.amountInCents']
      properties: ReadonlyArray<
         'transaction.id' | 'transaction.status' | 'transaction.amountInCents'
      >;
      checksum: string;
   };
   timestamp: number;
}