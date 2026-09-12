import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Logger, Product, ProductVariant } from '@vendure/core';

@Injectable()
export class ProductLimitEnforcementService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>,
        @InjectRepository(ProductVariant) private variantRepository: Repository<ProductVariant>,
    ) { }

    private async getChannelByAdministratorId(administratorId: number): Promise<any> {
        const { Administrator, Channel } = await import('@vendure/core');
        const admin = await this.productRepository.manager.findOne(Administrator, {
            where: { id: administratorId },
            relations: ['user', 'user.roles', 'user.roles.channels'],
        });
        if (!admin) return null;
        for (const role of admin.user.roles) {
            const sellerChannel = role.channels.find((ch: any) => ch.sellerId != null);
            if (sellerChannel) return sellerChannel;
        }
        return null;
    }

    async hideExcessProducts(administratorId: number, maxAllowed: number): Promise<number> {
        const channel = await this.getChannelByAdministratorId(administratorId);
        if (!channel) {
            Logger.warn(`No channel found for administrator ${administratorId}`, 'ProductLimitEnforcementService');
            return 0;
        }

        const products = await this.productRepository.find({
            where: {
                channels: { id: channel.id },
                deletedAt: IsNull(),
            },
            relations: ['channels'],
            order: { createdAt: 'ASC' },
            take: 1000,
        });

        const activeProducts = products.filter(p => !(p as any).customFields?.hidden);
        const productsToHide = activeProducts.slice(maxAllowed);
        let hiddenCount = 0;

        for (const product of productsToHide) {
            const existingCustomFields = (product as any).customFields || {};
            (product as any).customFields = {
                ...existingCustomFields,
                hidden: true,
                hiddenAt: new Date(),
            };
            await this.productRepository.save(product);
            hiddenCount++;
        }

        Logger.info(`Hidden ${hiddenCount} products for administrator ${administratorId}`, 'ProductLimitEnforcementService');
        return hiddenCount;
    }

    async restoreHiddenProducts(administratorId: number, maxAllowed: number): Promise<number> {
        const channel = await this.getChannelByAdministratorId(administratorId);
        if (!channel) {
            Logger.warn(`No channel found for administrator ${administratorId}`, 'ProductLimitEnforcementService');
            return 0;
        }

        const allProducts = await this.productRepository.find({
            where: {
                channels: { id: channel.id },
            },
            relations: ['channels'],
            order: { createdAt: 'ASC' },
            take: 1000,
        });

        const activeCount = allProducts.filter(
            p => !(p as any).customFields?.hidden && !p.deletedAt
        ).length;

        const hiddenProducts = allProducts.filter(
            p => (p as any).customFields?.hidden && !p.deletedAt
        );

        const canRestore = Math.max(0, maxAllowed - activeCount);
        if (canRestore <= 0) return 0;

        const toRestore = hiddenProducts.slice(0, canRestore);
        let restoredCount = 0;

        for (const product of toRestore) {
            const existingCustomFields = (product as any).customFields || {};
            (product as any).customFields = {
                ...existingCustomFields,
                hidden: false,
                hiddenAt: null,
            };
            await this.productRepository.save(product);
            restoredCount++;
        }

        Logger.info(`Restored ${restoredCount} products for administrator ${administratorId}`, 'ProductLimitEnforcementService');
        return restoredCount;
    }

    async hideExcessVariants(administratorId: number, maxAllowed: number): Promise<number> {
        const channel = await this.getChannelByAdministratorId(administratorId);
        if (!channel) {
            Logger.warn(`No channel found for administrator ${administratorId}`, 'ProductLimitEnforcementService');
            return 0;
        }

        const variants = await this.variantRepository.find({
            where: {
                product: {
                    channels: { id: channel.id },
                    deletedAt: IsNull(),
                },
                enabled: true,
                deletedAt: IsNull(),
            },
            relations: ['product', 'product.channels'],
            order: { createdAt: 'ASC' },
            take: 10000,
        });

        const activeVariants = variants.filter(v => !(v as any).customFields?.hidden);
        const variantsToHide = activeVariants.slice(maxAllowed);
        let hiddenCount = 0;

        for (const variant of variantsToHide) {
            const existingCustomFields = (variant as any).customFields || {};
            (variant as any).customFields = {
                ...existingCustomFields,
                hidden: true,
                hiddenAt: new Date(),
            };
            await this.variantRepository.save(variant);
            hiddenCount++;
        }

        Logger.info(`Hidden ${hiddenCount} variants for administrator ${administratorId}`, 'ProductLimitEnforcementService');
        return hiddenCount;
    }

    async restoreHiddenVariants(administratorId: number, maxAllowed: number): Promise<number> {
        const channel = await this.getChannelByAdministratorId(administratorId);
        if (!channel) {
            Logger.warn(`No channel found for administrator ${administratorId}`, 'ProductLimitEnforcementService');
            return 0;
        }

        const allVariants = await this.variantRepository.find({
            where: {
                product: {
                    channels: { id: channel.id },
                },
                deletedAt: IsNull(),
            },
            relations: ['product', 'product.channels'],
            order: { createdAt: 'ASC' },
            take: 10000,
        });

        const activeCount = allVariants.filter(
            v => !(v as any).customFields?.hidden && v.enabled
        ).length;

        const hiddenVariants = allVariants.filter(
            v => (v as any).customFields?.hidden
        );

        const canRestore = Math.max(0, maxAllowed - activeCount);
        if (canRestore <= 0) return 0;

        const toRestore = hiddenVariants.slice(0, canRestore);
        let restoredCount = 0;

        for (const variant of toRestore) {
            const existingCustomFields = (variant as any).customFields || {};
            (variant as any).customFields = {
                ...existingCustomFields,
                hidden: false,
                hiddenAt: null,
            };
            await this.variantRepository.save(variant);
            restoredCount++;
        }

        Logger.info(`Restored ${restoredCount} variants for administrator ${administratorId}`, 'ProductLimitEnforcementService');
        return restoredCount;
    }
}
