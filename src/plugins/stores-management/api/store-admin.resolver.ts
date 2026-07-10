import { Injectable, UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { Allow, Permission, RequestContext } from '@vendure/core';
import { SuperAdminGuard } from '../guards/super-admin.guard';
import { StoreService } from '../service/store.service';

@Injectable()
@Resolver()
@UseGuards(SuperAdminGuard)
export class StoreAdminResolver {
    constructor(private storeService: StoreService) {}

    @Query()
    @Allow(Permission.SuperAdmin)
    async stores(
        @Context() ctx: RequestContext,
        @Args('first') first: number,
        @Args('after') after?: string,
        @Args('filter') filter?: { search?: string; isNew?: boolean; isDeleted?: boolean },
    ) {
        return this.storeService.findStores({ first, after, filter });
    }

    @Query()
    @Allow(Permission.SuperAdmin)
    async storesList(
        @Context() ctx: RequestContext,
        @Args('options') options: { skip?: number; take?: number; sort?: any; filter?: any },
    ) {
        return this.storeService.storesList({
            skip: options.skip ?? 0,
            take: options.take ?? 20,
            sort: options.sort,
            filter: options.filter,
        });
    }

    @Query()
    @Allow(Permission.SuperAdmin)
    async store(
        @Context() ctx: RequestContext,
        @Args('id') id: string,
    ) {
        return this.storeService.findStoreById(Number(id));
    }
}
