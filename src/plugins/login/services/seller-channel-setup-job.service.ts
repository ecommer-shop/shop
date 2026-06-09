import { Injectable, OnModuleInit } from '@nestjs/common';
import {
    Channel,
    ChannelService,
    Collection,
    CollectionService,
    ConfigService,
    Facet,
    FacetService,
    FacetValue,
    ID,
    JobQueue,
    JobQueueService,
    Logger,
    ProcessContext,
    RequestContext,
    RequestContextService,
    TransactionalConnection,
    User,
} from '@vendure/core';

const LOG_CTX = 'SellerChannelSetupJob';

@Injectable()
export class SellerChannelSetupJobService implements OnModuleInit {
    private queue: JobQueue<{ channelId: ID }>;

    constructor(
        private jobQueueService: JobQueueService,
        private processContext: ProcessContext,
        private connection: TransactionalConnection,
        private configService: ConfigService,
        private requestContextService: RequestContextService,
        private facetService: FacetService,
        private collectionService: CollectionService,
        private channelService: ChannelService,
    ) { }

    async onModuleInit() {
        if (this.processContext.isServer) {
            this.queue = await this.jobQueueService.createQueue({
                name: 'assign-facets-collections',
                process: async (job) => {
                    await this.processChannelSetup(job.data.channelId);
                },
            });
            Logger.info('Created assign-facets-collections job queue', LOG_CTX);
        }
    }

    async enqueue(channelId: ID): Promise<void> {
        if (!this.queue) {
            Logger.warn('Job queue not available (running in worker context?)', LOG_CTX);
            return;
        }
        await this.queue.add({ channelId }, { retries: 2 });
        Logger.info(`Enqueued channel setup job for channel ${channelId}`, LOG_CTX);
    }

    private async processChannelSetup(channelId: ID): Promise<void> {
        Logger.info(`Processing channel setup for channel ${channelId}`, LOG_CTX);

        const superAdminCtx = await this.getSuperAdminContext();

        const sellerChannel = await this.connection
            .getRepository(superAdminCtx, Channel)
            .findOne({ where: { id: channelId as any } });

        if (!sellerChannel) {
            Logger.error(`Channel ${channelId} not found`, LOG_CTX);
            return;
        }

        Logger.info(`Assigning facets to channel ${sellerChannel.code}`, LOG_CTX);

        const { items: facets } = await this.facetService.findAll(superAdminCtx, { take: 1000 });
        for (const facet of facets) {
            await this.assignToChannelIfNotExists(superAdminCtx, Facet, facet.id, sellerChannel.id);
            for (const facetValue of facet.values) {
                await this.assignToChannelIfNotExists(superAdminCtx, FacetValue, facetValue.id, sellerChannel.id);
            }
        }

        Logger.info(`Assigning collections to channel ${sellerChannel.code}`, LOG_CTX);

        const { items: collections } = await this.collectionService.findAll(superAdminCtx, { take: 1000 });
        for (const collection of collections) {
            await this.assignToChannelIfNotExists(superAdminCtx, Collection, collection.id, sellerChannel.id);
        }

        Logger.info(`Channel setup completed for channel ${sellerChannel.code}`, LOG_CTX);
    }

    private async assignToChannelIfNotExists(
        ctx: RequestContext,
        entity: any,
        entityId: ID,
        channelId: ID,
    ): Promise<void> {
        const repo = this.connection.rawConnection.getRepository(entity);
        const tableName = repo.metadata.tableName;
        const joinTableName = `${tableName}_channels_channel`;
        const entityIdColumn = `${tableName}Id`;

        const qb = this.connection.rawConnection.createQueryBuilder();
        const exists = await qb
            .select('1')
            .from(joinTableName, 'jt')
            .where(`jt.${entityIdColumn} = :entityId`, { entityId })
            .andWhere(`jt.channelId = :channelId`, { channelId })
            .getExists();

        if (!exists) {
            await this.channelService.assignToChannels(ctx, entity, entityId, [channelId]);
        }
    }

    private async getSuperAdminContext(): Promise<RequestContext> {
        const { superadminCredentials } = this.configService.authOptions;
        const userRepo = this.connection.getRepository(User);
        const superAdminUser = await userRepo.findOne({
            where: { identifier: superadminCredentials.identifier },
        });
        return this.requestContextService.create({
            apiType: 'admin',
            user: superAdminUser!,
        });
    }
}
