import { Injectable } from '@nestjs/common';
import { normalizeString } from '@vendure/common/lib/normalize-string';
import { CUSTOMER_ROLE_CODE } from '@vendure/common/lib/shared-constants';
import {
    Administrator,
    AdministratorService,
    Channel,
    ChannelService,
    Collection,
    CollectionService,
    ConfigService,
    defaultShippingCalculator,
    Facet,
    FacetService,
    InternalServerError,
    isGraphQlErrorResult,
    Logger,
    manualFulfillmentHandler,
    Permission,
    RequestContext,
    RequestContextService,
    RoleService,
    SellerService,
    ShippingMethod,
    ShippingMethodService,
    StockLocation,
    StockLocationService,
    TaxSetting,
    TransactionalConnection,
    User,
} from '@vendure/core';
import crypto from 'crypto';

import { multivendorShippingEligibilityChecker } from '../../multivendor-plugin/config/mv-shipping-eligibility-checker';
import { loggerCtx } from '../constants';
import { GoogleSellerRegistrationResult, SellerOnboardingInput } from '../types';

@Injectable()
export class SellerOnboardingService {
    constructor(
        private administratorService: AdministratorService,
        private sellerService: SellerService,
        private roleService: RoleService,
        private channelService: ChannelService,
        private shippingMethodService: ShippingMethodService,
        private configService: ConfigService,
        private stockLocationService: StockLocationService,
        private facetService: FacetService,
        private collectionService: CollectionService,
        private requestContextService: RequestContextService,
        private connection: TransactionalConnection,
    ) { }

    async registerSeller(
        ctx: RequestContext,
        input: SellerOnboardingInput,
    ): Promise<GoogleSellerRegistrationResult> {
        const existingUser = await this.connection
            .getRepository(ctx, User)
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.roles', 'role')
            .where('user.identifier = :identifier', { identifier: input.emailAddress })
            .getOne();

        if (existingUser) {
            const hasAdminOrSellerRole = existingUser.roles.some(
                role => role.code !== CUSTOMER_ROLE_CODE,
            );

            if (hasAdminOrSellerRole) {
                throw new Error(
                    `Ya existe un usuario administrador/vendedor con el email: ${input.emailAddress}. Usa "Iniciar sesión con Google" en su lugar.`,
                );
            }
        }

        const superAdminCtx = await this.getSuperAdminContext(ctx);
        const channel = await this.createSellerChannelRoleAdmin(superAdminCtx, {
            shopName: input.shopName,
            seller: {
                firstName: input.firstName,
                lastName: input.lastName,
                emailAddress: input.emailAddress,
                password: this.generateSecurePassword(),
            },
        }, existingUser ?? undefined);

        await this.createSellerShippingMethod(superAdminCtx, input.shopName, channel);
        await this.createSellerStockLocation(superAdminCtx, input.shopName, channel);
        await this.assignFacetsToSellerChannel(superAdminCtx, channel);
        await this.assignCollectionsToSellerChannel(superAdminCtx, channel);

        Logger.info(
            `New seller registered via Google: ${input.emailAddress} (shop: ${input.shopName})`,
            loggerCtx,
        );

        return { success: true, email: input.emailAddress };
    }

    private async createSellerChannelRoleAdmin(
        ctx: RequestContext,
        input: {
            shopName: string;
            seller: {
                firstName: string;
                lastName: string;
                emailAddress: string;
                password: string;
            };
        },
        existingUser?: User,
    ) {
        const defaultChannel = await this.channelService.getDefaultChannel(ctx);
        const shopCode = normalizeString(input.shopName, '-');

        const seller = await this.sellerService.create(ctx, {
            name: input.shopName,
            customFields: {
                connectedAccountId: crypto.randomBytes(12).toString('hex'),
                acceptedTermsAndPrivacy: true,
                confirmedLegalAge: true,
            },
        });

        const channel = await this.channelService.create(ctx, {
            code: shopCode,
            sellerId: seller.id,
            token: `${shopCode}-token`,
            currencyCode: defaultChannel.defaultCurrencyCode,
            defaultLanguageCode: defaultChannel.defaultLanguageCode,
            pricesIncludeTax: defaultChannel.pricesIncludeTax,
            defaultShippingZoneId: defaultChannel.defaultShippingZone.id,
            defaultTaxZoneId: defaultChannel.defaultTaxZone.id,
        });

        if (isGraphQlErrorResult(channel)) {
            throw new InternalServerError(channel.message);
        }

        const superAdminRole = await this.roleService.getSuperAdminRole(ctx);
        await this.roleService.assignRoleToChannel(ctx, superAdminRole.id, channel.id);

        const role = await this.roleService.create(ctx, {
            code: `${shopCode}-admin`,
            channelIds: [channel.id],
            description: `Administrator of ${input.shopName}`,
            permissions: [
                Permission.CreateCatalog,
                Permission.UpdateCatalog,
                Permission.ReadCatalog,
                Permission.DeleteCatalog,
                Permission.CreateOrder,
                Permission.ReadOrder,
                Permission.UpdateOrder,
                Permission.DeleteOrder,
                Permission.ReadCustomer,
                Permission.ReadPaymentMethod,
                Permission.ReadShippingMethod,
                Permission.ReadPromotion,
                Permission.ReadCountry,
                Permission.ReadZone,
                Permission.ReadChannel,
                Permission.CreateAsset,
                Permission.ReadAsset,
                Permission.UpdateAsset,
                Permission.CreateCustomer,
                Permission.UpdateCustomer,
                Permission.DeleteCustomer,
                Permission.CreateTag,
                Permission.ReadTag,
                Permission.UpdateTag,
                Permission.DeleteTag,
                Permission.ReadAdministrator,
                Permission.UpdateAdministrator,
                Permission.ReadCollection,
                Permission.ReadFacet,
                Permission.CreateStockLocation,
                Permission.ReadStockLocation,
                Permission.UpdateStockLocation,
                Permission.CreatePromotion,
                Permission.ReadPromotion,
                Permission.UpdatePromotion,
                Permission.DeletePromotion,
            ],
        });

        if (existingUser) {
            await this.promoteExistingUserToAdministrator(
                ctx,
                existingUser,
                role.id.toString(),
                input.seller,
            );
        } else {
            await this.administratorService.create(ctx, {
                firstName: input.seller.firstName,
                lastName: input.seller.lastName,
                emailAddress: input.seller.emailAddress,
                password: input.seller.password,
                roleIds: [role.id],
            });
        }

        return channel;
    }

    private async promoteExistingUserToAdministrator(
        ctx: RequestContext,
        existingUser: User,
        roleId: string,
        seller: {
            firstName: string;
            lastName: string;
            emailAddress: string;
        },
    ) {
        const existingAdministrator = await this.administratorService.findOneByUserId(
            ctx,
            existingUser.id,
        );

        if (existingAdministrator) {
            await this.administratorService.assignRole(ctx, existingAdministrator.id, roleId);
            return;
        }

        const role = await this.roleService.findOne(ctx, roleId);
        if (!role) {
            throw new InternalServerError('Could not find the created seller role');
        }

        const userRepository = this.connection.getRepository(ctx, User);
        const reloadedUser = await userRepository.findOne({
            where: { id: existingUser.id },
            relations: { roles: true },
        });

        if (!reloadedUser) {
            throw new InternalServerError('Could not load existing user for promotion');
        }

        if (!reloadedUser.roles.some(userRole => userRole.id === role.id)) {
            reloadedUser.roles = [...reloadedUser.roles, role];
            await userRepository.save(reloadedUser);
        }

        const administratorRepository = this.connection.getRepository(ctx, Administrator);
        const administrator = administratorRepository.create({
            firstName: seller.firstName,
            lastName: seller.lastName,
            emailAddress: seller.emailAddress,
            user: reloadedUser,
        });
        await administratorRepository.save(administrator);
    }

    private async createSellerShippingMethod(
        ctx: RequestContext,
        shopName: string,
        sellerChannel: Channel,
    ) {
        const defaultChannel = await this.channelService.getDefaultChannel(ctx);
        const { shippingEligibilityCheckers, shippingCalculators, fulfillmentHandlers } =
            this.configService.shippingOptions;

        const shopCode = normalizeString(shopName, '-');

        const checker = shippingEligibilityCheckers.find(
            c => c.code === multivendorShippingEligibilityChecker.code,
        );
        const calculator = shippingCalculators.find(
            c => c.code === defaultShippingCalculator.code,
        );
        const fulfillmentHandler = fulfillmentHandlers.find(
            h => h.code === manualFulfillmentHandler.code,
        );

        if (!checker) {
            throw new InternalServerError(
                'Could not find a suitable ShippingEligibilityChecker for the seller',
            );
        }
        if (!calculator) {
            throw new InternalServerError(
                'Could not find a suitable ShippingCalculator for the seller',
            );
        }
        if (!fulfillmentHandler) {
            throw new InternalServerError(
                'Could not find a suitable FulfillmentHandler for the seller',
            );
        }

        const shippingMethod = await this.shippingMethodService.create(ctx, {
            code: `${shopCode}-shipping`,
            checker: { code: checker.code, arguments: [] },
            calculator: {
                code: calculator.code,
                arguments: [
                    { name: 'rate', value: '500' },
                    { name: 'includesTax', value: TaxSetting.auto },
                    { name: 'taxRate', value: '20' },
                ],
            },
            fulfillmentHandler: fulfillmentHandler.code,
            translations: [
                {
                    languageCode: defaultChannel.defaultLanguageCode,
                    name: `Standard Shipping for ${shopName}`,
                },
            ],
        });

        await this.channelService.assignToChannels(ctx, ShippingMethod, shippingMethod.id, [
            sellerChannel.id,
        ]);
    }

    private async createSellerStockLocation(
        ctx: RequestContext,
        shopName: string,
        sellerChannel: Channel,
    ) {
        const stockLocation = await this.stockLocationService.create(ctx, {
            name: `${shopName} Warehouse`,
        });

        await this.channelService.assignToChannels(ctx, StockLocation, stockLocation.id, [
            sellerChannel.id,
        ]);
    }

    private async assignFacetsToSellerChannel(
        ctx: RequestContext,
        sellerChannel: Channel,
    ) {
        const { items: facets } = await this.facetService.findAll(ctx, { take: 1000 });
        for (const facet of facets) {
            await this.channelService.assignToChannels(ctx, Facet, facet.id, [sellerChannel.id]);
        }
    }

    private async assignCollectionsToSellerChannel(
        ctx: RequestContext,
        sellerChannel: Channel,
    ) {
        const { items: collections } = await this.collectionService.findAll(ctx, { take: 1000 });
        for (const collection of collections) {
            await this.channelService.assignToChannels(ctx, Collection, collection.id, [sellerChannel.id]);
        }
    }

    private async getSuperAdminContext(ctx: RequestContext): Promise<RequestContext> {
        const { superadminCredentials } = this.configService.authOptions;
        const superAdminUser = await this.connection.getRepository(ctx, User).findOne({
            where: { identifier: superadminCredentials.identifier },
        });

        return this.requestContextService.create({
            apiType: 'admin',
            user: superAdminUser!,
        });
    }

    private generateSecurePassword(): string {
        return crypto.randomBytes(32).toString('base64url');
    }
}
