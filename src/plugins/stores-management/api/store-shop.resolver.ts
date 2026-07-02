import { Injectable } from '@nestjs/common';
import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { Allow, Permission, RequestContext } from '@vendure/core';
import { StoreService } from '../service/store.service';

@Injectable()
@Resolver()
export class StoreShopResolver {
    constructor(private storeService: StoreService) {}

    @Query()
    @Allow(Permission.Public)
    async searchStores(
        @Context() ctx: RequestContext,
        @Args('input') input: { query: string; take?: number; skip?: number },
    ) {
        return this.storeService.searchStores({
            query: input.query,
            take: input.take ?? 20,
            skip: input.skip ?? 0,
        });
    }
}
