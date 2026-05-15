import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Allow, Channel, ChannelService, Ctx, idsAreEqual, Permission, Product, RequestContext, TransactionalConnection } from '@vendure/core';

function displayNameFromChannelCode(code: string): string {
    return code
        .split('-')
        .filter(Boolean)
        .map(seg => seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase())
        .join(' ');
}

/** Shop público: canal no default vía `Channel`→`products` / `productVariants` (evita joins vacíos en Product). */
@Resolver('Product')
export class ProductSellerShopResolver {
    constructor(
        private connection: TransactionalConnection,
        private channelService: ChannelService,
    ) {}

    @ResolveField()
    @Allow(Permission.Public)
    async sellerShop(
        @Ctx() ctx: RequestContext,
        @Parent() product: Product,
    ): Promise<{ channelCode: string; sellerName: string } | null> {
        const defaultChannel = await this.channelService.getDefaultChannel();
        const productId = product.id;

        const channelRepo = this.connection.rawConnection.getRepository(Channel);

        const viaProduct = await channelRepo
            .createQueryBuilder('channel')
            .innerJoin('channel.products', 'product', 'product.id = :productId', { productId })
            .getMany();

        const viaVariants = await channelRepo
            .createQueryBuilder('channel')
            .innerJoin('channel.productVariants', 'variant')
            .innerJoin('variant.product', 'product', 'product.id = :productId', { productId })
            .getMany();

        const byId = new Map<string, Channel>();
        for (const ch of [...viaProduct, ...viaVariants]) {
            byId.set(String(ch.id), ch);
        }

        const merged = [...byId.values()].filter(ch => ch.code);

        const nonDefault = merged.filter(ch => !idsAreEqual(ch.id, defaultChannel.id));
        if (nonDefault.length === 0) {
            return null;
        }

        const withSeller = nonDefault.filter(ch => ch.sellerId != null);
        const picked = withSeller[0] ?? nonDefault[0];

        const channel = await this.connection.getRepository(ctx, Channel).findOne({
            where: { id: picked.id },
            relations: ['seller'],
        });

        if (!channel?.code) {
            return null;
        }

        const sellerName =
            channel.seller?.name?.trim() ||
            displayNameFromChannelCode(channel.code).trim() ||
            channel.code;

        return {
            channelCode: channel.code,
            sellerName,
        };
    }
}
