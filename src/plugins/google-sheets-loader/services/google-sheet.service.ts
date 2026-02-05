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
import { GOOGLE_SHEETS_LOADER_PLUGIN_OPTIONS } from '../constants';
import { GoogleSheet } from '../entities/google-sheet.entity';
import { PluginInitOptions } from '../types';

// These can be replaced by generated types if you set up code generation
interface CreateGoogleSheetInput {
    code: string;
    // Define the input fields here
    customFields?: CustomFieldsObject;
}
interface UpdateGoogleSheetInput {
    id: ID;
    code?: string;
    // Define the input fields here
    customFields?: CustomFieldsObject;
}

@Injectable()
export class GoogleSheetService {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private customFieldRelationService: CustomFieldRelationService, @Inject(GOOGLE_SHEETS_LOADER_PLUGIN_OPTIONS) private options: PluginInitOptions
    ) {}

    findAll(
        ctx: RequestContext,
        options?: ListQueryOptions<GoogleSheet>,
        relations?: RelationPaths<GoogleSheet>,
    ): Promise<PaginatedList<GoogleSheet>> {
        return this.listQueryBuilder
            .build(GoogleSheet, options, {
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
        relations?: RelationPaths<GoogleSheet>,
    ): Promise<GoogleSheet | null> {
        return this.connection
            .getRepository(ctx, GoogleSheet)
            .findOne({
                where: { id },
                relations,
            });
    }

    async create(ctx: RequestContext, input: CreateGoogleSheetInput): Promise<GoogleSheet> {
        const newEntityInstance = new GoogleSheet(input);
        const newEntity = await this.connection.getRepository(ctx, GoogleSheet).save(newEntityInstance);
        await this.customFieldRelationService.updateRelations(ctx, GoogleSheet, input, newEntity);
        return assertFound(this.findOne(ctx, newEntity.id));
    }

    async update(ctx: RequestContext, input: UpdateGoogleSheetInput): Promise<GoogleSheet> {
        const entity = await this.connection.getEntityOrThrow(ctx, GoogleSheet, input.id);
        const updatedEntity = patchEntity(entity, input);
        await this.connection.getRepository(ctx, GoogleSheet).save(updatedEntity, { reload: false });
        await this.customFieldRelationService.updateRelations(ctx, GoogleSheet, input, updatedEntity);
        return assertFound(this.findOne(ctx, updatedEntity.id));
    }

    async delete(ctx: RequestContext, id: ID): Promise<DeletionResponse> {
        const entity = await this.connection.getEntityOrThrow(ctx, GoogleSheet, id);
        try {
            await this.connection.getRepository(ctx, GoogleSheet).remove(entity);
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
