import { Injectable } from '@nestjs/common';
import {
    RequestContext,
    TransactionalConnection,
    Customer,
    User,
    Logger,
    Address,
    UserService,
} from '@vendure/core';

const LOG_CTX = 'DeleteCustomerService';

@Injectable()
export class DeleteCustomerService {
    constructor(
        private connection: TransactionalConnection,
        private userService: UserService,
    ) { }

    /**
     * Elimina un customer y su información en cascada identificándolo por su clerkId.
     * Anonimiza los datos personales (GDPR) y soft-deletes el User para preservar el historial de órdenes.
     */
    async deleteCustomerByClerkId(
        ctx: RequestContext,
        clerkId: string,
    ): Promise<{ success: boolean; message: string }> {
        const customerRepo = this.connection.getRepository(ctx, Customer);
        const userRepo = this.connection.getRepository(ctx, User);
        const addressRepo = this.connection.getRepository(ctx, Address);

        // Buscar el customer por su customField clerkId
        const customer = await customerRepo
            .createQueryBuilder('customer')
            .leftJoinAndSelect('customer.user', 'user')
            .leftJoinAndSelect('user.authenticationMethods', 'authMethods')
            .leftJoinAndSelect('customer.addresses', 'addresses')
            .where('customer.customFieldsClerkid = :clerkId', { clerkId })
            .andWhere('customer.deletedAt IS NULL')
            .getOne();

        if (!customer) {
            Logger.warn(
                `No se encontró customer activo con clerkId: ${clerkId}`,
                LOG_CTX,
            );
            return {
                success: false,
                message: 'No se encontró el usuario con el clerkId proporcionado.',
            };
        }

        Logger.info(
            `Iniciando eliminación en cascada del Customer ${customer.id} (clerkId: ${clerkId})`,
            LOG_CTX,
        );

        // Eliminar direcciones
        if (customer.addresses?.length) {
            await addressRepo.remove(customer.addresses);
            Logger.info(
                `Eliminadas ${customer.addresses.length} dirección(es) del Customer ${customer.id}`,
                LOG_CTX,
            );
        }

        // Eliminar métodos de autenticación externos para invalidar acceso futuro
        if (customer.user?.authenticationMethods?.length) {
            const methodIds = customer.user.authenticationMethods.map((m) => m.id);
            // Usar raw query para borrar independientemente del discriminador de tipo
            await this.connection
                .getRepository(ctx, 'AuthenticationMethod' as any)
                .delete(methodIds);
            Logger.info(
                `Eliminados ${methodIds.length} método(s) de autenticación del User ${customer.user.id}`,
                LOG_CTX,
            );
        }

        //Anonimizar y soft-delete del User
        if (customer.user) {
            const anonymizedIdentifier = `deleted_${customer.user.id}@deleted.invalid`;
            await userRepo.update(customer.user.id, {
                identifier: anonymizedIdentifier,
                deletedAt: new Date(),
            });
            Logger.info(
                `User ${customer.user.id} anonimizado y marcado como eliminado`,
                LOG_CTX,
            );
        }

        // Anonimizar datos personales y soft-delete del Customer
        const anonymizedEmail = `deleted_${customer.id}@deleted.invalid`;
        await customerRepo
            .createQueryBuilder()
            .update(Customer)
            .set({
                emailAddress: anonymizedEmail,
                firstName: 'Deleted',
                lastName: 'User',
                phoneNumber: null as any,
                deletedAt: new Date(),
            })
            .where('id = :id', { id: customer.id })
            .execute();

        // Limpiar el clerkId en custom fields
        await customerRepo.update(customer.id, {
            customFields: {
                clerkId: null,
            } as any,
        });

        Logger.info(
            `Customer ${customer.id} eliminado correctamente en cascada (clerkId: ${clerkId})`,
            LOG_CTX,
        );

        return {
            success: true,
            message: 'Usuario y su información eliminados correctamente.',
        };
    }

    /**
     * Obtiene el clerkId del customer autenticado en la sesión actual.
     */
    async getClerkIdFromSession(ctx: RequestContext): Promise<string | null> {
        if (!ctx.session?.user) return null;

        const customerRepo = this.connection.getRepository(ctx, Customer);
        const customer = await customerRepo
            .createQueryBuilder('customer')
            .select(['customer.id', 'customer.customFieldsClerkid'])
            .where('customer.userId = :userId', { userId: ctx.session.user.id })
            .andWhere('customer.deletedAt IS NULL')
            .getOne();

        return (customer as any)?.customFields?.clerkId ?? null;
    }
}
