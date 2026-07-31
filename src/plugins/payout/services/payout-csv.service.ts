import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionalConnection, Administrator } from '@vendure/core';
import { PayoutTransaction, PayoutTransactionStatus } from '../entities/payout-transaction.entity';
import {
    PAYOUT_PLUGIN_OPTIONS, ACH_CODES, TRANSACTION_TYPE, COMPANY_ACCOUNT_TYPE_CODE,
    PAYMENT_TYPE, APPLICATION_CODE, RECORD_CONTROL, RECORD_DETAIL, LINE_BREAK,
    PAB, DOC_TYPE_MAP, BANKS, PHONE_BANKS,
} from '../constants';
import { PluginInitOptions } from '../types';

@Injectable()
export class PayoutCsvService {
    private readonly logger = new Logger(PayoutCsvService.name);

    constructor(
        @Inject(PAYOUT_PLUGIN_OPTIONS) private options: PluginInitOptions,
        @InjectRepository(PayoutTransaction)
        private transactionRepository: Repository<PayoutTransaction>,
        private connection: TransactionalConnection,
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

    private sanitizeName(v: string): string {
        return String(v)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/ñ/g, 'n')
            .replace(/Ñ/g, 'N');
    }

    private async resolveSellerEmails(channelTokens: string[]): Promise<Record<string, string>> {
        const unique = [...new Set(channelTokens.filter(Boolean))];
        if (unique.length === 0) return {};

        const adminRepo = this.connection.rawConnection.getRepository(Administrator);
        const admins = await adminRepo
            .createQueryBuilder('administrator')
            .innerJoin('administrator.user', 'user')
            .innerJoin('user.roles', 'role')
            .innerJoin('role.channels', 'roleChannel')
            .where('roleChannel.token IN (:...tokens)', { tokens: unique })
            .andWhere('administrator.deletedAt IS NULL')
            .select(['administrator.id', 'administrator.emailAddress', 'roleChannel.token'])
            .getMany();

        const result: Record<string, string> = {};
        for (const admin of admins) {
            const roles = (admin as any).user?.roles ?? [];
            for (const role of roles) {
                const channels = role.channels ?? [];
                for (const ch of channels) {
                    if (!result[ch.token]) {
                        result[ch.token] = admin.emailAddress;
                    }
                }
            }
        }
        return result;
    }

    private padL(v: string | number, len: number): string {
        return String(v).padStart(len, '0').slice(-len);
    }

    private padR(v: string | number, len: number): string {
        return String(v).padEnd(len, ' ').slice(0, len);
    }

    private cleanNum(v: string | number): string {
        return String(v).replace(/\D/g, '');
    }

    private formatValue(amountInCentavos: number): string {
        const pesos = Math.floor(amountInCentavos / 100);
        const centavos = amountInCentavos % 100;
        return this.padL(pesos, PAB.VALUE_ENTERO) + this.padL(centavos, PAB.VALUE_DECIMAL);
    }

    async generatePabTxt(batchId: number): Promise<string> {
        const transactions = await this.transactionRepository.find({
            where: { batchId, status: PayoutTransactionStatus.PENDING },
        });

        const totalCredits = transactions.reduce((s, t) => s + t.amount, 0);
        const now = new Date();
        const yyyymmdd = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;

        const secuencia = this.padL(batchId % 100, 2);
        const companyAccountType = COMPANY_ACCOUNT_TYPE_CODE[this.options.companyAccountType] || 'S';

        // ─── Registro de Control (264 chars) ─────────────────────────────────
        let ctrl = RECORD_CONTROL;                                                      // 1
        ctrl += this.padL(this.cleanNum(this.options.companyNit), PAB.CTRL_NIT);       // 15
        ctrl += APPLICATION_CODE;                                                       // 1
        ctrl += this.padR('', PAB.CTRL_FILLER1);                                        // 15
        ctrl += PAYMENT_TYPE;                                                           // 3
        ctrl += this.padR('PAGO TERC', PAB.CTRL_DESCRIPCION);                           // 10
        ctrl += yyyymmdd;                                                               // 8
        ctrl += secuencia;                                                              // 2
        ctrl += yyyymmdd;                                                               // 8
        ctrl += this.padL(transactions.length, PAB.CTRL_REGISTROS);                     // 6
        ctrl += this.padL(0, PAB.CTRL_DEBITOS);                                         // 17
        ctrl += this.formatValue(totalCredits);                                          // 17
        ctrl += this.padL(this.cleanNum(this.options.companyAccount), PAB.CTRL_CUENTA); // 11
        ctrl += companyAccountType;                                                     // 1
        ctrl += this.padR('', PAB.CTRL_FILLER2);                                        // 149

        // ─── Archivo ──────────────────────────────────────────────────────────
        let file = ctrl + LINE_BREAK;

        const emailsByToken = await this.resolveSellerEmails(transactions.map(t => t.channelToken));

        for (const t of transactions) {
            if (!t.legalIdType) {
                this.logger.warn(
                    `Payout transaction ${t.id} (seller ${t.sellerName}) sin legalIdType — usando fallback '1' (Cédula)`,
                );
            }
            const bankCode = t.bankCode || '';
            const achCode = ACH_CODES[bankCode] || (BANKS[bankCode] ? bankCode : '') || '1007';
            const txType = TRANSACTION_TYPE[t.accountType || 'AHORROS'] || '37';
            const ref = t.orderCodes.split(',')[0]?.trim() || `PAYOUT-${t.id}`;
            const nombre = this.sanitizeName(t.sellerName);
            const docType = DOC_TYPE_MAP[t.legalIdType || ''] || '1';
            const isPhoneBank = PHONE_BANKS.includes(bankCode);
            const accountTypeCode = COMPANY_ACCOUNT_TYPE_CODE[t.accountType || 'AHORROS'] || 'S';
            const celular = isPhoneBank ? this.cleanNum(t.accountNumber || '') : '';
            const email = emailsByToken[t.channelToken] || '';

            let line = RECORD_DETAIL;                                                             // 1
            line += this.padR(this.cleanNum(t.legalId || '0'), PAB.DET_NIT);                      // 15
            line += this.padR(nombre, PAB.DET_NOMBRE);                                            // 30
            line += this.padL(achCode, PAB.DET_BANCO);                                            // 9 — numérico, sin excepción → ceros izq
            line += this.padR(this.cleanNum(t.accountNumber || ''), PAB.DET_CUENTA);              // 17
            line += accountTypeCode;                                                               // 1 (lugar pago = tipo cuenta S/D)
            line += txType;                                                                       // 2
            line += this.formatValue(t.amount);                                                   // 17
            line += yyyymmdd;                                                                     // 8
            line += this.padR(ref, PAB.DET_REF);                                                  // 21
            line += docType;                                                                      // 1
            line += '00000';                                                                      // 5 (oficina — en ceros si abono a cuenta)
            line += this.padR(celular, PAB.DET_CELULAR);                                           // 15
            line += this.padR(email, PAB.DET_EMAIL);                                               // 80
            line += this.padR('', PAB.DET_AUTORIZADO);                                            // 15
            line += this.padR('', PAB.DET_FILLER);                                                // 27

            file += line + LINE_BREAK;
        }

        return file;
    }
}
