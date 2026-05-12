import { Args, Query, Resolver } from '@nestjs/graphql';
import {
    Administrator,
    Allow,
    Collection,
    Channel,
    Ctx,
    Permission,
    Product,
    RequestContext,
    TransactionalConnection,
} from '@vendure/core';

type AdminStoreFields = {
    storeDescription?: string | null;
    storeBannerUrl?: string | { preview?: string | null; source?: string | null } | null;
};

/** AssetServerPlugin no añade el prefijo a campos String custom; lo hacemos a mano. */
function absolutizeAssetUrl(value: string | null | undefined): string | null {
    if (!value) return null;
    if (/^(https?:|data:|\/)/i.test(value)) return value;
    const prefix = process.env.ASSET_URL_PREFIX || '';
    if (!prefix) return value;
    return `${prefix.replace(/\/+$/, '')}/${value.replace(/^\/+/, '')}`;
}

function resolveBannerUrl(field: AdminStoreFields['storeBannerUrl']): string | null {
    if (!field) return null;
    const raw = typeof field === 'string' ? field : field.preview || field.source || null;
    return absolutizeAssetUrl(raw);
}

@Resolver()
export class StorePageShopResolver {
    constructor(private connection: TransactionalConnection) {}

    /** Carga Administrator con custom fields (incluyendo el Asset de `storeBannerUrl`).
     *  Se hace en dos pasos porque TypeORM `createQueryBuilder` no respeta `eager` ni los joins
     *  embebidos sobre `customFields.<relation>` de forma fiable. */
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

        return this.connection.getRepository(ctx, Administrator).findOne({
            where: { id: adminId },
            relations: ['customFields.storeBannerUrl'],
        });
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
    ): Promise<{ storeName: string; storeDescription: string | null; storeBannerUrl: string | null }> {
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

        const collTrans =
            collectionEntity?.translations?.find(tr => tr.languageCode === ctx.languageCode) ??
            collectionEntity?.translations?.[0];
        let sellerName = collTrans?.name ?? 'Tienda';

        if (collectionEntity?.featuredAsset?.preview) {
            storeBannerUrl = collectionEntity.featuredAsset.preview ?? null;
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
            storeBannerUrl = resolveBannerUrl(adminFields?.storeBannerUrl) || storeBannerUrl;
        }

        return {
            storeName: sellerName,
            storeDescription,
            storeBannerUrl,
        };
    }

    private async storePageProfileFromChannelSeller(
        ctx: RequestContext,
    ): Promise<{ storeName: string; storeDescription: string | null; storeBannerUrl: string | null }> {
        const channel = await this.connection.getRepository(ctx, Channel).findOne({
            where: { id: ctx.channelId },
            relations: ['seller'],
        });

        let storeDescription: string | null = null;
        let storeBannerUrl: string | null = null;

        if (!channel?.sellerId || !channel.seller) {
            return { storeName: '', storeDescription: null, storeBannerUrl: null };
        }

        const storeName = channel.seller.name || 'Tienda';

        const administrator = await this.loadAdminWithStoreFields(ctx, ctx.channelId);
        const adminFields = administrator?.customFields as AdminStoreFields | undefined;

        storeDescription = adminFields?.storeDescription ?? null;
        storeBannerUrl = resolveBannerUrl(adminFields?.storeBannerUrl);

        return {
            storeName,
            storeDescription,
            storeBannerUrl,
        };
    }
}
