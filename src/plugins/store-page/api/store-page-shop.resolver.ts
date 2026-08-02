import { Args, Query, Resolver } from '@nestjs/graphql';
import {
    Administrator,
    Allow,
    Asset,
    Channel,
    Collection,
    Ctx,
    Permission,
    Product,
    RequestContext,
    Seller,
    TransactionalConnection,
} from '@vendure/core';

import { parseSocialLinksJson } from '../services/social-links.service';
type AssetFieldValue = string | { preview?: string | null; source?: string | null } | null;

type AdminStoreFields = {
    storeDescription?: string | null;
    storeBannerUrl?: AssetFieldValue;
    storeHeaderBannerUrl?: AssetFieldValue;
};

type StorePageProfile = {
    storeName: string;
    storeDescription: string | null;
    storeBannerUrl: string | null;
    storeHeaderBannerUrl: string | null;
    socialLinks: Array<{ platform: string; username: string; dmLink: string; profileUrl: string; displayName: string | null; inPipeline: boolean }>
};

const STORE_ASSET_FIELDS = ['storeBannerUrl', 'storeHeaderBannerUrl'] as const;
type StoreAssetField = (typeof STORE_ASSET_FIELDS)[number];

/** AssetServerPlugin no añade el prefijo a campos String custom; lo hacemos a mano. */
function absolutizeAssetUrl(value: string | null | undefined): string | null {
    if (!value) return null;
    if (/^(https?:|data:|\/)/i.test(value)) return value;
    const prefix = process.env.ASSET_URL_PREFIX || '';
    if (!prefix) return value;
    return `${prefix.replace(/\/+$/, '')}/${value.replace(/^\/+/, '')}`;
}

/** Vendure guarda miniaturas en `/preview/` y el original en `/source/`. */
function preferSourcePath(url: string): string {
    return url.replace(/\/preview\//i, '/source/');
}

function resolveAssetUrl(field: AssetFieldValue | undefined, preferSource = false): string | null {
    if (!field) return null;
    const raw =
        typeof field === 'string'
            ? field
            : preferSource
                ? field.source || field.preview || null
                : field.preview || field.source || null;
    const absolute = absolutizeAssetUrl(raw);
    return preferSource && absolute ? preferSourcePath(absolute) : absolute;
}

function resolveAssetId(
    administrator: Administrator,
    customFields: AdminStoreFields | undefined,
    fieldName: StoreAssetField,
): string | null {
    const assetField = customFields?.[fieldName];
    if (typeof assetField === 'string' || typeof assetField === 'number') {
        return String(assetField);
    }
    const idKey = `${fieldName}Id` as keyof AdminStoreFields;
    const cf = customFields as Record<string, string | number | null | undefined> | undefined;
    if (cf?.[idKey] != null) {
        return String(cf[idKey]);
    }
    const columnKey = `customFields${fieldName.charAt(0).toUpperCase()}${fieldName.slice(1)}id` as
        | 'customFieldsStorebannerurlid'
        | 'customFieldsStoreheaderbannerurlid';
    const row = administrator as unknown as Record<string, number | null | undefined>;
    if (row[columnKey] != null) {
        return String(row[columnKey]);
    }
    return null;
}

function isHydratedAsset(field: AssetFieldValue | undefined): boolean {
    return !!field && typeof field === 'object';
}

@Resolver()
export class StorePageShopResolver {
    constructor(private connection: TransactionalConnection) { }

    /** Carga Administrator con custom fields (incluyendo Assets de tienda). */
    private async loadAdminWithStoreFields(
        ctx: RequestContext,
        channelId: string | number,
    ): Promise<Administrator | null> {
        const adminId = (
            await this.connection
                .getRepository(ctx, Administrator)
                .createQueryBuilder('administrator')
                .innerJoin('administrator.user', 'user')
                .innerJoin('user.roles', 'role')
                .innerJoin('role.channels', 'roleChannel')
                .where('roleChannel.id = :channelId', { channelId })
                .andWhere('administrator.deletedAt IS NULL')
                .orderBy('administrator.updatedAt', 'DESC')
                .select(['administrator.id'])
                .getOne()
        )?.id;

        if (!adminId) return null;

        const administrator = await this.connection.getRepository(ctx, Administrator).findOne({
            where: { id: adminId },
        });

        if (!administrator) {
            return null;
        }

        const customFields = (administrator.customFields ?? {}) as AdminStoreFields;
        const hydratedFields: AdminStoreFields = { ...customFields };

        for (const fieldName of STORE_ASSET_FIELDS) {
            if (isHydratedAsset(customFields[fieldName])) {
                continue;
            }

            const assetId = resolveAssetId(administrator, customFields, fieldName);
            if (!assetId) {
                continue;
            }

            const asset = await this.connection.getRepository(ctx, Asset).findOne({
                where: { id: assetId },
            });

            if (asset) {
                hydratedFields[fieldName] = asset;
            }
        }

        administrator.customFields = hydratedFields as Administrator['customFields'];
        return administrator;
    }

    private profileFromAdminFields(
        storeName: string,
        adminFields: AdminStoreFields | undefined,
        seller?: Seller,
    ): StorePageProfile {
        const socialLinks = seller?.customFields?.socialLinks
            ? parseSocialLinksJson(seller.customFields.socialLinks).map(l => ({
                platform: l.platform,
                username: l.username,
                dmLink: l.dmLink,
                profileUrl: l.profileUrl,
                displayName: l.displayName ?? null,
                inPipeline: l.inPipeline,
            }))
            : [];

        return {
            storeName,
            storeDescription: adminFields?.storeDescription ?? null,
            storeBannerUrl: resolveAssetUrl(adminFields?.storeBannerUrl),
            storeHeaderBannerUrl: resolveAssetUrl(adminFields?.storeHeaderBannerUrl, true),
            socialLinks,
        };
    }

    /**
     * Si `collectionSlug` no se envía: destacados solo por canal Shop (cabecera vendure-token).
     * Si se envía (compat storefront antiguo): filtra también por colección mediante `translations.slug`
     * (en Vendure el slug no existe en la tabla base `collection`).
     */
    @Query()
    @Allow(Permission.Public)
    async storeFeaturedProductIds(
        @Ctx() ctx: RequestContext,
        @Args('collectionSlug', { type: () => String, nullable: true }) collectionSlug?: string | null,
    ): Promise<string[]> {
        let qb = this.connection
            .getRepository(ctx, Product)
            .createQueryBuilder('product')
            .innerJoin('product.channels', 'channel')
            .andWhere('channel.id = :channelId', { channelId: ctx.channelId })
            .andWhere('product.customFieldsStorefeatured = :featured', { featured: true });

        if (collectionSlug) {
            qb = qb
                .innerJoin('product.variants', 'featuredVariant')
                .innerJoin('featuredVariant.collections', 'featuredColl')
                .innerJoin('featuredColl.translations', 'featuredCollTr')
                .andWhere('featuredCollTr.slug = :collectionSlug', { collectionSlug })
                .andWhere('featuredCollTr.languageCode = :languageCode', {
                    languageCode: ctx.languageCode,
                });
        }

        const featuredProducts = await qb.orderBy('product.updatedAt', 'DESC').limit(3).getMany();

        return featuredProducts.map(product => String(product.id));
    }

    @Query()
    @Allow(Permission.Public)
    async storePageProfile(
        @Ctx() ctx: RequestContext,
        @Args('collectionSlug', { type: () => String, nullable: true }) collectionSlug?: string | null,
    ): Promise<StorePageProfile> {
        if (!collectionSlug) {
            return this.storePageProfileFromChannelSeller(ctx);
        }

        const collectionMatches = await this.connection
            .getRepository(ctx, Collection)
            .createQueryBuilder('collection')
            .leftJoinAndSelect('collection.featuredAsset', 'featuredAsset')
            .innerJoinAndSelect('collection.translations', 'collectionTranslation')
            .innerJoin('collection.channels', 'collectionChannel', 'collectionChannel.id = :channelId', {
                channelId: ctx.channelId,
            })
            .where('collectionTranslation.slug = :slug', { slug: collectionSlug })
            .andWhere('collectionTranslation.languageCode = :languageCode', {
                languageCode: ctx.languageCode,
            })
            .getMany();

        const collectionEntity = collectionMatches[0];

        let storeDescription: string | null = null;
        let storeBannerUrl: string | null = null;
        let storeHeaderBannerUrl: string | null = null;

        const collTrans =
            collectionEntity?.translations?.find(tr => tr.languageCode === ctx.languageCode) ??
            collectionEntity?.translations?.[0];
        let sellerName = collTrans?.name ?? 'Tienda';

        const collectionHeaderAsset = collectionEntity?.featuredAsset;
        if (collectionHeaderAsset) {
            storeHeaderBannerUrl = resolveAssetUrl(collectionHeaderAsset, true);
        }
        storeDescription = collTrans?.description || null;

        const firstProduct = await this.connection
            .getRepository(ctx, Product)
            .createQueryBuilder('product')
            .innerJoin('product.channels', 'channel')
            .andWhere('channel.id = :channelId', { channelId: ctx.channelId })
            .innerJoin('product.variants', 'profileVariant')
            .innerJoin('profileVariant.collections', 'profileColl')
            .innerJoin('profileColl.translations', 'profileCollTr')
            .andWhere('profileCollTr.slug = :slug', { slug: collectionSlug })
            .andWhere('profileCollTr.languageCode = :languageCode', {
                languageCode: ctx.languageCode,
            })
            .leftJoinAndSelect('product.channels', 'allChannels')
            .leftJoinAndSelect('allChannels.seller', 'sellerRel')
            .limit(1)
            .getOne();

        const sellerChannel = firstProduct?.channels?.find(ch => !!ch.seller) ?? firstProduct?.channels?.[0];
        const seller = sellerChannel?.seller;

        if (seller && sellerChannel?.id != null) {
            sellerName = seller.name || sellerName;

            const administrator = await this.loadAdminWithStoreFields(ctx, sellerChannel.id);
            const adminFields = administrator?.customFields as AdminStoreFields | undefined;

            if (adminFields?.storeDescription) {
                storeDescription = adminFields.storeDescription || storeDescription;
            }
            storeBannerUrl = resolveAssetUrl(adminFields?.storeBannerUrl) || storeBannerUrl;
            storeHeaderBannerUrl =
                resolveAssetUrl(adminFields?.storeHeaderBannerUrl, true) || storeHeaderBannerUrl;
        }

        const socialLinks = seller?.customFields?.socialLinks
            ? parseSocialLinksJson(seller.customFields.socialLinks).map(l => ({
                platform: l.platform,
                username: l.username,
                dmLink: l.dmLink,
                profileUrl: l.profileUrl,
                displayName: l.displayName ?? null,
                inPipeline: l.inPipeline,
            }))
            : [];

        return {
            storeName: sellerName,
            storeDescription,
            storeBannerUrl,
            storeHeaderBannerUrl,
            socialLinks,
        };
    }

    private async storePageProfileFromChannelSeller(ctx: RequestContext): Promise<StorePageProfile> {
        const channel = await this.connection.getRepository(ctx, Channel).findOne({
            where: { id: ctx.channelId },
            relations: ['seller'],
        });

        if (!channel?.sellerId || !channel.seller) {
            return {
                storeName: '',
                storeDescription: null,
                storeBannerUrl: null,
                storeHeaderBannerUrl: null,
                socialLinks: [],
            };
        }

        const storeName = channel.seller.name || 'Tienda';

        const administrator = await this.loadAdminWithStoreFields(ctx, ctx.channelId);
        const adminFields = administrator?.customFields as AdminStoreFields | undefined;

        return this.profileFromAdminFields(storeName, adminFields, channel.seller);
    }

    @Query()
    @Allow(Permission.Public)
    async storeSocialLinks(
        @Ctx() ctx: RequestContext,
        @Args('channelCode') channelCode: string,
    ) {
        const channel = await this.connection.getRepository(ctx, Channel).findOne({
            where: { code: channelCode },
            relations: ['seller'],
        });
        if (!channel?.seller?.customFields?.socialLinks) return [];

        return parseSocialLinksJson(channel.seller.customFields.socialLinks).map(l => ({
            platform: l.platform,
            username: l.username,
            dmLink: l.dmLink,
            profileUrl: l.profileUrl,
            displayName: l.displayName ?? null,
            inPipeline: l.inPipeline,
        }));
    }
}
