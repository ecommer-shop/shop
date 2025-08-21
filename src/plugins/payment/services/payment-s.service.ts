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
import { PAYMENT_PLUGIN_OPTIONS } from '../constants';
import { PaymentS } from '../entities/payment-s.entity';
import { PluginInitOptions } from '../types';

// These can be replaced by generated types if you set up code generation
interface CreatePaymentSInput {
    code: string;
    // Define the input fields here
    customFields?: CustomFieldsObject;
}
interface UpdatePaymentSInput {
    id: ID;
    code?: string;
    // Define the input fields here
    customFields?: CustomFieldsObject;
}

@Injectable()
export class PaymentSService {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private customFieldRelationService: CustomFieldRelationService, @Inject(PAYMENT_PLUGIN_OPTIONS) private options: PluginInitOptions
    ) {}

    findAll(
        ctx: RequestContext,
        options?: ListQueryOptions<PaymentS>,
        relations?: RelationPaths<PaymentS>,
    ): Promise<PaginatedList<PaymentS>> {
        return this.listQueryBuilder
            .build(PaymentS, options, {
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
        relations?: RelationPaths<PaymentS>,
    ): Promise<PaymentS | null> {
        return this.connection
            .getRepository(ctx, PaymentS)
            .findOne({
                where: { id },
                relations,
            });
    }

    async create(ctx: RequestContext, input: CreatePaymentSInput): Promise<PaymentS> {
        const newEntityInstance = new PaymentS(input);
        const newEntity = await this.connection.getRepository(ctx, PaymentS).save(newEntityInstance);
        await this.customFieldRelationService.updateRelations(ctx, PaymentS, input, newEntity);
        return assertFound(this.findOne(ctx, newEntity.id));
    }

    async update(ctx: RequestContext, input: UpdatePaymentSInput): Promise<PaymentS> {
        const entity = await this.connection.getEntityOrThrow(ctx, PaymentS, input.id);
        const updatedEntity = patchEntity(entity, input);
        await this.connection.getRepository(ctx, PaymentS).save(updatedEntity, { reload: false });
        await this.customFieldRelationService.updateRelations(ctx, PaymentS, input, updatedEntity);
        return assertFound(this.findOne(ctx, updatedEntity.id));
    }

    async delete(ctx: RequestContext, id: ID): Promise<DeletionResponse> {
        const entity = await this.connection.getEntityOrThrow(ctx, PaymentS, id);
        try {
            await this.connection.getRepository(ctx, PaymentS).remove(entity);
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
