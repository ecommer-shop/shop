import { Injectable } from '@nestjs/common';
import {
    Administrator,
    Logger,
    Product,
    ProductVariant,
    RequestContext,
    Seller,
    TransactionalConnection,
    User,
} from '@vendure/core';
import { CustomerSubscription, SubscriptionStatus } from '../../wompi-subscription/entities';

const LOG_CTX = 'DeleteSellerAccountService';

export interface DeleteSellerAccountResult {
    success: boolean;
    message: string;
}

@Injectable()
export class DeleteSellerAccountService {
    constructor(
        private connection: TransactionalConnection,
    ) { }

    async deleteSellerAccount(ctx: RequestContext): Promise<DeleteSellerAccountResult> {
        const adminRepo = this.connection.getRepository(ctx, Administrator);
        const userRepo = this.connection.getRepository(ctx, User);
        const sellerRepo = this.connection.getRepository(ctx, Seller);
        const productRepo = this.connection.getRepository(ctx, Product);
        const subRepo = this.connection.getRepository(ctx, CustomerSubscription);

        const userId = ctx.activeUserId;
        if (!userId) {
            return { success: false, message: 'No se encontró un usuario autenticado.' };
        }

        const admin = await adminRepo.findOne({
            where: { user: { id: userId } },
            relations: {
                user: {
                    roles: {
                        channels: true,
                    },
                },
            },
        });

        if (!admin) {
            return { success: false, message: 'No se encontró el administrador.' };
        }

        if (admin.deletedAt) {
            return { success: false, message: 'Esta cuenta ya ha sido eliminada.' };
        }

        const sellerRole = admin.user?.roles?.find(r => r.code.endsWith('-admin'));
        if (!sellerRole) {
            return { success: false, message: 'No se encontró un rol de vendedor válido.' };
        }

        const sellerChannel = sellerRole.channels?.find(ch => ch.sellerId != null);
        if (!sellerChannel) {
            return { success: false, message: 'No se encontró el canal del vendedor.' };
        }

        const seller = await sellerRepo.findOne({
            where: { id: sellerChannel.sellerId },
        });

        Logger.info(
            `Iniciando eliminación de cuenta del seller ${admin.emailAddress} (adminId: ${admin.id}, channel: ${sellerChannel.code})`,
            LOG_CTX,
        );

        // 1. Deshabilitar productos y variantes del seller channel
        const products = await productRepo
            .createQueryBuilder('product')
            .innerJoin('product.channels', 'channel', 'channel.id = :channelId', { channelId: sellerChannel.id })
            .leftJoinAndSelect('product.variants', 'variant')
            .where('product.deletedAt IS NULL')
            .getMany();

        for (const product of products) {
            product.enabled = false;
            for (const variant of product.variants || []) {
                variant.enabled = false;
            }
        }
        await productRepo.save(products);

        const variantCount = products.reduce((sum, p) => sum + (p.variants?.length ?? 0), 0);
        Logger.info(
            `Deshabilitados ${products.length} productos y ${variantCount} variantes del canal ${sellerChannel.code}`,
            LOG_CTX,
        );

        // 2. Cancelar suscripción activa
        const numericAdminId = Number(admin.id);
        const activeSub = await subRepo.findOne({
            where: { administratorId: numericAdminId, status: SubscriptionStatus.ACTIVE },
        });
        if (activeSub) {
            activeSub.status = SubscriptionStatus.CANCELLED;
            activeSub.endsAt = new Date();
            activeSub.autoRenew = false;
            await subRepo.save(activeSub);
            Logger.info(
                `Suscripción ${activeSub.id} cancelada para el administrador ${admin.id}`,
                LOG_CTX,
            );
        }

        // 3. Soft-delete y anonimizar Seller
        if (seller) {
            seller.name = `Deleted_${seller.id}`;
            seller.deletedAt = new Date();
            await sellerRepo.save(seller);
            Logger.info(`Seller ${seller.id} anonimizado y marcado como eliminado`, LOG_CTX);
        }

        // 4. Anonimizar y soft-delete del User
        if (admin.user) {
            const user = admin.user;
            user.identifier = `deleted_${user.id}@deleted.invalid`;
            user.deletedAt = new Date();
            await userRepo.save(user);
            Logger.info(`User ${user.id} anonimizado y marcado como eliminado`, LOG_CTX);
        }

        // 5. Anonimizar y soft-delete del Administrator
        admin.firstName = 'Deleted';
        admin.lastName = 'User';
        admin.emailAddress = `deleted_${admin.id}@deleted.invalid`;
        admin.deletedAt = new Date();
        await adminRepo.save(admin);
        Logger.info(`Administrator ${admin.id} anonimizado y marcado como eliminado`, LOG_CTX);

        return {
            success: true,
            message: 'Tu cuenta ha sido eliminada permanentemente. Serás redirigido al inicio de sesión.',
        };
    }
}
