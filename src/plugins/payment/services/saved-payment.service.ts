import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SavedPaymentMethod } from '../entities/saved-payment-method.entity';

@Injectable()
export class SavedPaymentService {
    constructor(
        @InjectRepository(SavedPaymentMethod)
        private readonly repo: Repository<SavedPaymentMethod>,
    ) { }

    findByCustomer(customerId: string, channelToken: string): Promise<SavedPaymentMethod[]> {
        return this.repo.find({
            where: { customerId, channelToken },
            order: { isDefault: 'DESC', createdAt: 'DESC' },
        });
    }

    findById(id: number, customerId: string, channelToken: string): Promise<SavedPaymentMethod | null> {
        return this.repo.findOne({ where: { id, customerId, channelToken } });
    }

    findByPaymentSourceId(wompiPaymentSourceId: string): Promise<SavedPaymentMethod | null> {
        return this.repo.findOne({ where: { wompiPaymentSourceId } });
    }

    async save(data: {
        customerId: string;
        type: string;
        wompiPaymentSourceId: string;
        lastFour: string;
        brand: string;
        expiryMonth: string;
        expiryYear: string;
        cardHolderName?: string;
        channelToken: string;
    }): Promise<SavedPaymentMethod> {
        const existing = await this.repo.findOne({
            where: { customerId: data.customerId, channelToken: data.channelToken },
            order: { createdAt: 'ASC' },
        });

        const isDefault = !existing;

        const entity = this.repo.create({ ...data, isDefault });
        return this.repo.save(entity);
    }

    async delete(id: number, customerId: string, channelToken: string): Promise<boolean> {
        const card = await this.findById(id, customerId, channelToken);
        if (!card) return false;

        if (card.isDefault) {
            const next = await this.repo.findOne({
                where: { customerId, channelToken },
                order: { createdAt: 'ASC' },
            });
            if (next && next.id !== card.id) {
                await this.repo.update(next.id, { isDefault: true });
            }
        }

        await this.repo.remove(card);
        return true;
    }

    async setDefault(id: number, customerId: string, channelToken: string): Promise<SavedPaymentMethod | null> {
        const card = await this.findById(id, customerId, channelToken);
        if (!card) return null;

        await this.repo.update({ customerId, channelToken, isDefault: true }, { isDefault: false });
        card.isDefault = true;
        return this.repo.save(card);
    }
}
