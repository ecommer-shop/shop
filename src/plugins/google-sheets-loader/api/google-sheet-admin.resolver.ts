import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeletionResponse, Permission } from '@vendure/common/lib/generated-types';
import { CustomFieldsObject } from '@vendure/common/lib/shared-types';
import {
    Allow,
    Ctx,
    ID,
    ListQueryOptions,
    PaginatedList,
    RelationPaths,
    Relations,
    RequestContext,
    Transaction
} from '@vendure/core';
import { GoogleSheet } from '../entities/google-sheet.entity';
import { GoogleSheetService } from '../services/google-sheet.service';

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

@Resolver()
export class GoogleSheetAdminResolver {
    constructor(private googleSheetService: GoogleSheetService) {}

    @Query()
    @Allow(Permission.SuperAdmin)
    async googleSheet(
        @Ctx() ctx: RequestContext,
        @Args() args: { id: ID },
        @Relations(GoogleSheet) relations: RelationPaths<GoogleSheet>,
    ): Promise<GoogleSheet | null> {
        return this.googleSheetService.findOne(ctx, args.id, relations);
    }

    @Query()
    @Allow(Permission.SuperAdmin)
    async googleSheets(
        @Ctx() ctx: RequestContext,
        @Args() args: { options: ListQueryOptions<GoogleSheet> },
        @Relations(GoogleSheet) relations: RelationPaths<GoogleSheet>,
    ): Promise<PaginatedList<GoogleSheet>> {
        return this.googleSheetService.findAll(ctx, args.options || undefined, relations);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.SuperAdmin)
    async createGoogleSheet(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: CreateGoogleSheetInput },
    ): Promise<GoogleSheet> {
        return this.googleSheetService.create(ctx, args.input);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.SuperAdmin)
    async updateGoogleSheet(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: UpdateGoogleSheetInput },
    ): Promise<GoogleSheet> {
        return this.googleSheetService.update(ctx, args.input);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.SuperAdmin)
    async deleteGoogleSheet(@Ctx() ctx: RequestContext, @Args() args: { id: ID }): Promise<DeletionResponse> {
        return this.googleSheetService.delete(ctx, args.id);
    }
}
