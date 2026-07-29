import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PayoutBatch } from '../entities/payout-batch.entity';
import { PayoutTransaction } from '../entities/payout-transaction.entity';

@Injectable()
export class PayoutAdminService {
    constructor(
        @InjectRepository(PayoutBatch)
        private batchRepository: Repository<PayoutBatch>,
        @InjectRepository(PayoutTransaction)
        private transactionRepository: Repository<PayoutTransaction>,
    ) {}

    async findAllBatches(): Promise<PayoutBatch[]> {
        return this.batchRepository.find({
            order: { createdAt: 'DESC' },
        });
    }

    async findBatchById(id: number): Promise<PayoutBatch | null> {
        return this.batchRepository.findOne({
            where: { id },
            relations: ['transactions'],
        });
    }

    async findBatchesByChannelToken(channelToken: string): Promise<PayoutBatch[]> {
        const transactions = await this.transactionRepository.find({
            where: { channelToken },
        });
        const batchIds = [...new Set(transactions.map(t => t.batchId))];
        if (batchIds.length === 0) return [];

        return this.batchRepository
            .createQueryBuilder('b')
            .where('b.id IN (:...ids)', { ids: batchIds })
            .orderBy('b.createdAt', 'DESC')
            .getMany();
    }
}
