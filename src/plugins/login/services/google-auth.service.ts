import { Injectable } from '@nestjs/common';
import {
    AdministratorService,
    Channel,
    ChannelService,
    ConfigService,
    defaultShippingCalculator,
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
import { normalizeString } from '@vendure/common/lib/normalize-string';
import { OAuth2Client, TokenPayload } from 'google-auth-library';
import crypto from 'crypto';

import { multivendorShippingEligibilityChecker } from '../../multivendor-plugin/config/mv-shipping-eligibility-checker';
import { loggerCtx } from '../constants';

@Injectable()
export class GoogleAuthService {
    private client: OAuth2Client;

    constructor(
        private administratorService: AdministratorService,
        private sellerService: SellerService,
        private roleService: RoleService,
        private channelService: ChannelService,
        private shippingMethodService: ShippingMethodService,
        private configService: ConfigService,
        private stockLocationService: StockLocationService,
        private requestContextService: RequestContextService,
        private connection: TransactionalConnection,
    ) {
        this.client = new OAuth2Client(process.env.GOOGLE_OAUTH_CLIENT_ID);
    }

    /**
     * Verifica un token de Google (ID token o access_token) y retorna el payload.
     * Primero intenta como ID token; si falla, como access_token via Google userinfo.
     */
    async verifyGoogleToken(token: string): Promise<TokenPayload> {
        const GOOGLE_API = 'https://www.googleapis.com/oauth2/v3/userinfo';
        try {
            const ticket = await this.client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_OAUTH_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            if (payload?.email) return payload;
        } catch {

        }

        const res = await fetch(
            GOOGLE_API,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            },
        );
        if (!res.ok) {
            throw new Error(`Google userinfo request failed: ${res.status}`);
        }
        const info = (await res.json()) as {
            email?: string;
            given_name?: string;
            family_name?: string;
            sub?: string;
            email_verified?: boolean;
        };
        if (!info.email) {
            throw new Error('Google token does not contain an email address');
        }

        // Construir un payload compatible con TokenPayload
        return {
            iss: 'https://accounts.google.com',
            aud: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
            sub: info.sub || '',
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 3600,
            email: info.email,
            email_verified: info.email_verified ?? true,
            given_name: info.given_name,
            family_name: info.family_name,
        } as TokenPayload;
    }

    //Registra un nuevo vendedor usando la información del token de Google
    async registerSellerWithGoogle(
        ctx: RequestContext,
        input: { token: string; shopName: string },
    ): Promise<{ success: boolean; email: string }> {
        const payload = await this.verifyGoogleToken(input.token);
        const email = payload.email!;
        const firstName = payload.given_name || email.split('@')[0];
        const lastName = payload.family_name || '';

        const existingUser = await this.connection
            .getRepository(ctx, User)
            .findOne({ where: { identifier: email } });

        if (existingUser) {
            throw new Error(
                `Ya existe un usuario con el email: ${email}. Usa "Iniciar sesión con Google" en su lugar.`,
            );
        }

        // Crear el vendedor usando contexto de superadmin
        const superAdminCtx = await this.getSuperAdminContext(ctx);
        const channel = await this.createSellerChannelRoleAdmin(superAdminCtx, {
            shopName: input.shopName,
            seller: {
                firstName,
                lastName,
                emailAddress: email,
                password: this.generateSecurePassword(),
            },
        });

        await this.createSellerShippingMethod(superAdminCtx, input.shopName, channel);
        await this.createSellerStockLocation(superAdminCtx, input.shopName, channel);

        Logger.info(
            `New seller registered via Google: ${email} (shop: ${input.shopName})`,
            loggerCtx,
        );

        return { success: true, email };
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
                Permission.CreateCustomer,
                Permission.UpdateCustomer,
                Permission.DeleteCustomer,
                Permission.CreateTag,
                Permission.ReadTag,
                Permission.UpdateTag,
                Permission.DeleteTag,
            ],
        });

        await this.administratorService.create(ctx, {
            firstName: input.seller.firstName,
            lastName: input.seller.lastName,
            emailAddress: input.seller.emailAddress,
            password: input.seller.password,
            roleIds: [role.id],
        });

        return channel;
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