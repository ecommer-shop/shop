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

@Resolver()
export class StorePageShopResolver {
    constructor(private connection: TransactionalConnection) {}

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

        if (seller) {
            sellerName = seller.name || sellerName;

            const administrator = await this.connection
                .getRepository(ctx, Administrator)
                .createQueryBuilder('administrator')
                .leftJoinAndSelect('administrator.user', 'user')
                .leftJoinAndSelect('user.roles', 'role')
                .leftJoinAndSelect('role.channels', 'roleChannel')
                .where('roleChannel.id = :channelId', { channelId: sellerChannel?.id })
                .andWhere('administrator.deletedAt IS NULL')
                .orderBy('administrator.updatedAt', 'DESC')
                .getOne();

            const adminFields = administrator?.customFields as
                | {
                      storeDescription?: string | null;
                      storeBannerUrl?:
                          | string
                          | { preview?: string | null; source?: string | null }
                          | null;
                  }
                | undefined;

            if (adminFields?.storeDescription) {
                storeDescription = adminFields.storeDescription || storeDescription;
            }
            const bannerField = adminFields?.storeBannerUrl;
            const resolvedBannerUrl =
                typeof bannerField === 'string'
                    ? bannerField
                    : bannerField?.preview || bannerField?.source || null;
            storeBannerUrl = resolvedBannerUrl || storeBannerUrl;
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

        const administrator = await this.connection
            .getRepository(ctx, Administrator)
            .createQueryBuilder('administrator')
            .leftJoinAndSelect('administrator.user', 'user')
            .leftJoinAndSelect('user.roles', 'role')
            .leftJoinAndSelect('role.channels', 'roleChannel')
            .where('roleChannel.id = :channelId', { channelId: ctx.channelId })
            .andWhere('administrator.deletedAt IS NULL')
            .orderBy('administrator.updatedAt', 'DESC')
            .getOne();

        const adminFields = administrator?.customFields as
            | {
                  storeDescription?: string | null;
                  storeBannerUrl?: string | { preview?: string | null; source?: string | null } | null;
              }
            | undefined;

        storeDescription = adminFields?.storeDescription ?? null;
        const bannerField = adminFields?.storeBannerUrl;
        storeBannerUrl =
            typeof bannerField === 'string'
                ? bannerField
                : bannerField?.preview || bannerField?.source || null;

        return {
            storeName,
            storeDescription,
            storeBannerUrl,
        };
    }
}
