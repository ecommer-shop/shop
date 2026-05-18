import { bootstrapWorker } from '@vendure/core';
import { config } from './src/vendure-config';
import {
    ChannelService,
    RequestContextService,
    ProductService,
    AdministratorService,
    TransactionalConnection,
} from '@vendure/core';
import { User } from '@vendure/core';

async function migrateProducts() {
    const { app } = await bootstrapWorker(config);

    const channelService = app.get(ChannelService);
    const productService = app.get(ProductService);
    const requestContextService = app.get(RequestContextService);
    const administratorService = app.get(AdministratorService);
    const connection = app.get(TransactionalConnection);

    const defaultChannel = await channelService.getDefaultChannel();

    const internalCtx = await requestContextService.create({
        apiType: 'admin',
        channelOrToken: defaultChannel,
    });

    const admins = await administratorService.findAll(internalCtx, {});
    const superadminBasic = admins.items.find(
        (a) => a.user.identifier === 'superadmin',
    );

    if (!superadminBasic) {
        console.error('No se encontró el usuario superadmin');
        await app.close();
        return;
    }

    // Hidratar el usuario con todas sus relaciones necesarias
    const superadminUser = await connection
        .getRepository(internalCtx, User)
        .findOne({
            where: { id: superadminBasic.user.id },
            relations: ['roles', 'roles.channels'],
        });

    if (!superadminUser) {
        console.error('No se pudo cargar el usuario superadmin con sus roles');
        await app.close();
        return;
    }

    const ctx = await requestContextService.create({
        apiType: 'admin',
        channelOrToken: defaultChannel,
        user: superadminUser,
    });

    const allChannels = await channelService.findAll(ctx);
    const vendorChannels = allChannels.items.filter(
        (c) => c.id !== defaultChannel.id,
    );

    for (const channel of vendorChannels) {
        const vendorCtx = await requestContextService.create({
            apiType: 'admin',
            channelOrToken: channel,
            user: superadminUser,
        });

        const products = await productService.findAll(vendorCtx, {});
        const productIds = products.items.map((p) => p.id);

        if (productIds.length === 0) {
            console.log(`Canal "${channel.code}" sin productos, saltando...`);
            continue;
        }

        console.log(
            `Asignando ${productIds.length} productos del canal "${channel.code}" al default channel...`,
        );

        await productService.assignProductsToChannel(ctx, {
            productIds,
            channelId: defaultChannel.id,
            priceFactor: 1,
        });
    }

    console.log('Migración completa.');
    await app.close();
}

migrateProducts().catch(console.error);