import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Administrator, Allow, Channel, ChannelService, Ctx, idsAreEqual, Permission, Product, RequestContext, TransactionalConnection } from '@vendure/core';

type AdminPickupFields = {
    storePickupAddress?: string | null;
    storePickupLatitude?: number | string | null;
    storePickupLongitude?: number | string | null;
    storePickupNeighborhood?: string | null;
};

type SellerShopLink = {
    channelCode: string;
    sellerName: string;
    pickupAddress: string | null;
    pickupLatLng: string | null;
    pickupNeighborhood: string | null;
};

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

    private async loadAdminPickupFields(
        ctx: RequestContext,
        channelId: string | number,
    ): Promise<AdminPickupFields | null> {
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

        if (!adminId) {
            return null;
        }

        const administrator = await this.connection.getRepository(ctx, Administrator).findOne({
            where: { id: adminId },
        });

        return (administrator?.customFields as AdminPickupFields | undefined) ?? null;
    }

    @ResolveField()
    @Allow(Permission.Public)
    async sellerShop(
        @Ctx() ctx: RequestContext,
        @Parent() product: Product,
    ): Promise<SellerShopLink | null> {
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
        const pickupFields = await this.loadAdminPickupFields(ctx, channel.id);
        const pickupLatitude = pickupFields?.storePickupLatitude;
        const pickupLongitude = pickupFields?.storePickupLongitude;
        const pickupLatLng =
            pickupLatitude != null && pickupLongitude != null
                ? `${pickupLatitude},${pickupLongitude}`
                : null;

        return {
            channelCode: channel.code,
            sellerName,
            pickupAddress: pickupFields?.storePickupAddress || null,
            pickupLatLng,
            pickupNeighborhood: pickupFields?.storePickupNeighborhood || null,
        };
    }
}
