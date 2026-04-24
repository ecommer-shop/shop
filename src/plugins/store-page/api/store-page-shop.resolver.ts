import { Args, Query, Resolver } from '@nestjs/graphql';
import {
    Administrator,
    Allow,
    Collection,
    Ctx,
    Permission,
    Product,
    RequestContext,
    TransactionalConnection,
} from '@vendure/core';

@Resolver()
export class StorePageShopResolver {
    constructor(private connection: TransactionalConnection) {}

    @Query()
    @Allow(Permission.Public)
    async storeFeaturedProductIds(
        @Ctx() ctx: RequestContext,
        @Args() args: { collectionSlug: string },
    ): Promise<string[]> {
        const featuredProducts = await this.connection
            .getRepository(ctx, Product)
            .createQueryBuilder('product')
            .innerJoin('product.channels', 'channel')
            .innerJoin('product.collections', 'collection', 'collection.slug = :slug', { slug: args.collectionSlug })
            .andWhere('channel.id = :channelId', { channelId: ctx.channelId })
            .andWhere('product.customFieldsStorefeatured = :featured', { featured: true })
            .orderBy('product.updatedAt', 'DESC')
            .limit(3)
            .getMany();

        return featuredProducts.map(product => String(product.id));
    }

    @Query()
    @Allow(Permission.Public)
    async storePageProfile(
        @Ctx() ctx: RequestContext,
        @Args() args: { collectionSlug: string },
    ): Promise<{ storeName: string; storeDescription: string | null; storeBannerUrl: string | null }> {
        const collection = await this.connection
            .getRepository(ctx, Collection)
            .createQueryBuilder('collection')
            .leftJoinAndSelect('collection.featuredAsset', 'featuredAsset')
            .innerJoin('collection.channels', 'channel', 'channel.id = :channelId', { channelId: ctx.channelId })
            .where('collection.slug = :slug', { slug: args.collectionSlug })
            .getOne();

        const firstProduct = await this.connection
            .getRepository(ctx, Product)
            .createQueryBuilder('product')
            .innerJoin('product.collections', 'collection', 'collection.slug = :slug', { slug: args.collectionSlug })
            .innerJoin('product.channels', 'channel', 'channel.id = :channelId', { channelId: ctx.channelId })
            .leftJoinAndSelect('product.channels', 'allChannels')
            .leftJoinAndSelect('allChannels.seller', 'seller')
            .limit(1)
            .getOne();
        const firstProductId = firstProduct?.id;
        let sellerName = collection?.name ?? 'Tienda';
        let storeDescription: string | null = collection?.description || null;
        let storeBannerUrl: string | null = collection?.featuredAsset?.preview || null;

        if (firstProductId) {
            const product = await this.connection
                .getRepository(ctx, Product)
                .createQueryBuilder('product')
                .leftJoinAndSelect('product.channels', 'channel')
                .leftJoinAndSelect('channel.seller', 'seller')
                .where('product.id = :productId', { productId: firstProductId })
                .getOne();

            const sellerChannel = product?.channels?.find(ch => !!ch.seller) ?? product?.channels?.[0];
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
                storeDescription = adminFields?.storeDescription || storeDescription;
                const bannerField = adminFields?.storeBannerUrl;
                const resolvedBannerUrl =
                    typeof bannerField === 'string'
                        ? bannerField
                        : bannerField?.preview || bannerField?.source || null;
                storeBannerUrl = resolvedBannerUrl || storeBannerUrl;
            }
        }

        return {
            storeName: sellerName,
            storeDescription,
            storeBannerUrl,
        };
    }
}
