import { Inject, Injectable } from '@nestjs/common';
import { DeletionResponse, DeletionResult } from '@vendure/common/lib/generated-types';
import { CustomFieldsObject, ID, PaginatedList } from '@vendure/common/lib/shared-types';
import {
    CustomFieldRelationService,
    ListQueryBuilder,
    ListQueryOptions,
    RelationPaths,
    RequestContext,
    TransactionalConnection,
    assertFound,
    patchEntity
} from '@vendure/core';
import { REVIEWS_PLUGIN_OPTIONS } from '../constants';
import { Review } from '../entities/review.entity';
import { PluginInitOptions } from '../types';
import { OrderLine, Customer, Product } from '@vendure/core';

// These can be replaced by generated types if you set up code generation
interface CreateReviewInput {
    code: string;
    rating: number;
    comment: string;
    productId: ID;
    customFields?: CustomFieldsObject;
}
interface UpdateReviewInput {
    id: ID;
    code?: string;
    rating?: number;
    comment?: string;
    approved?: boolean;
    customFields?: CustomFieldsObject;
}

@Injectable()
export class ReviewService {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private customFieldRelationService: CustomFieldRelationService, @Inject(REVIEWS_PLUGIN_OPTIONS) private options: PluginInitOptions
    ) {}

    findAll(
        ctx: RequestContext,
        options?: ListQueryOptions<Review>,
        relations?: RelationPaths<Review>,
    ): Promise<PaginatedList<Review>> {
        return this.listQueryBuilder
            .build(Review, options, {
                relations,
                ctx,
            }
            ).getManyAndCount().then(([items, totalItems]) => {
                return {
                    items,
                    totalItems,
                }
            }
            );
    }

    findOne(
        ctx: RequestContext,
        id: ID,
        relations?: RelationPaths<Review>,
    ): Promise<Review | null> {
        return this.connection
            .getRepository(ctx, Review)
            .findOne({
                where: { id },
                relations,
            });
    }

    async create(ctx: RequestContext, input: CreateReviewInput): Promise<Review> {
        if (!ctx.activeUserId) {
            throw new Error('User must be authenticated');
        }

        const customer = await this.connection
            .getRepository(ctx, Customer)
            .findOneOrFail({
                where: { user: { id: ctx.activeUserId } },
            });

        const product = await this.connection
            .getRepository(ctx, Product)
            .findOneOrFail({
                where: { id: input.productId },
            });

        const review = new Review({
            code: input.code,
            rating: input.rating,
            comment: input.comment,
            customer,
            product,
            approved: false,
            customFields: input.customFields,
        });

        const savedReview = await this.connection
            .getRepository(ctx, Review)
            .save(review);

        await this.customFieldRelationService.updateRelations(
            ctx,
            Review,
            input,
            savedReview,
        );

        return assertFound(this.findOne(ctx, savedReview.id));
    }

    async approve(ctx: RequestContext, id: ID): Promise<Review> {
        const review = await this.connection.getEntityOrThrow(ctx, Review, id);
        review.approved = true;
        await this.connection.getRepository(ctx, Review).save(review);
        return assertFound(this.findOne(ctx, review.id));
    }
    
    /*async createReviewForProduct(ctx: RequestContext, productId: ID, rating: number, comment: string): Promise<Review> {
        if (!ctx.activeUserId) {
            throw new Error('User must be authenticated');
        }

        const alreadyReviewed = await this.connection
            .getRepository(ctx, Review)
            .count({
            where: {
                customer: { user: { id: ctx.activeUserId } },
                product: { id: productId },
            },
            });

        if (alreadyReviewed > 0) {
            throw new Error('You already reviewed this product');
        }

        const purchased = await this.connection
            .getRepository(ctx, OrderLine)
            .createQueryBuilder('line')
            .leftJoin('line.order', 'order')
            .leftJoin('line.productVariant', 'variant')
            .where('order.customer.user.id = :userId', { userId: ctx.activeUserId })
            .andWhere('order.state = :state', { state: 'PaymentSettled' })
            .andWhere('variant.productId = :productId', { productId })
            .getCount();

        if (purchased === 0) {
            throw new Error('You have not purchased this product');
        }

        const review = new Review({
            rating,
            comment,
            approved: false,
            product: { id: productId } as any,
        });

        const saved = await this.connection
            .getRepository(ctx, Review)
            .save(review);

        return assertFound(this.findOne(ctx, saved.id));
    }*/

    async update(ctx: RequestContext, input: UpdateReviewInput): Promise<Review> {
        const entity = await this.connection.getEntityOrThrow(ctx, Review, input.id);
        const updatedEntity = patchEntity(entity, input);
        await this.connection.getRepository(ctx, Review).save(updatedEntity, { reload: false });
        await this.customFieldRelationService.updateRelations(ctx, Review, input, updatedEntity);
        return assertFound(this.findOne(ctx, updatedEntity.id));
    }

    private async customerBoughtProduct(ctx: RequestContext,customerId: ID, productId: ID): Promise<boolean> {
        const count = await this.connection
            .getRepository(ctx, OrderLine)
            .createQueryBuilder('orderLine')
            .leftJoin('orderLine.order', 'order')
            .leftJoin('orderLine.productVariant', 'variant')
            .where('order.customerId = :customerId', { customerId })
            .andWhere('order.active = false')
            .andWhere('variant.productId = :productId', { productId })
            .getCount();

        return count > 0;
    }

    private async reviewAlreadyExists(ctx: RequestContext, customerId: ID, productId: ID): Promise<boolean> {
        const count = await this.connection.getRepository(ctx, Review).count({
            where: {
                customer: { id: customerId },
                product: { id: productId },
            },
        });

        return count > 0;
    }

    private async assertCustomerBoughtProduct(
        ctx: RequestContext,
        customerId: ID,
        productId: ID,
    ): Promise<void> {
        const bought = await this.customerBoughtProduct(ctx, customerId, productId);

        if (!bought) {
            throw new Error('Customer has not purchased this product');
        }
    }

    private async assertNoExistingReview(
        ctx: RequestContext,
        customerId: ID,
        productId: ID,
    ): Promise<void> {
        const exists = await this.reviewAlreadyExists(ctx, customerId, productId);

        if (exists) {
            throw new Error('Customer already reviewed this product');
        }
    }

    async delete(ctx: RequestContext, id: ID): Promise<DeletionResponse> {
        const entity = await this.connection.getEntityOrThrow(ctx, Review, id);
        try {
            await this.connection.getRepository(ctx, Review).remove(entity);
            return {
                result: DeletionResult.DELETED,
            };
        } catch (e: any) {
            return {
                result: DeletionResult.NOT_DELETED,
                message: e.toString(),
            };
        }
    }
}
