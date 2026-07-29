import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PayoutTransaction, PayoutTransactionStatus } from '../entities/payout-transaction.entity';

@Injectable()
export class PayoutCsvService {
    constructor(
        @InjectRepository(PayoutTransaction)
        private transactionRepository: Repository<PayoutTransaction>,
    ) {}

    async generateCsv(batchId: number): Promise<string> {
        const transactions = await this.transactionRepository.find({
            where: { batchId, status: PayoutTransactionStatus.PENDING },
        });

        const headers = 'TipoIdentificacion,NumeroIdentificacion,Nombre,TipoCuenta,NumeroCuenta,Valor,Referencia';

        const rows = transactions.map(t => {
            const valorPesos = Math.round(t.amount / 100);
            const ref = t.orderCodes.split(',')[0]?.trim() || `PAYOUT-${t.id}`;

            return [
                t.legalIdType || 'CC',
                `"${t.legalId || ''}"`,
                `"${t.sellerName}"`,
                t.accountType || 'AHORROS',
                t.accountNumber || '',
                valorPesos,
                ref,
            ].join(',');
        });

        return [headers, ...rows].join('\n');
    }
}
