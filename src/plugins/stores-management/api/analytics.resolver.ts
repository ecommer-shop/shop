import { Injectable, UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { Allow, Permission, RequestContext } from '@vendure/core';
import { SuperAdminGuard } from '../guards/super-admin.guard';
import { AnalyticsService } from '../service/analytics.service';

@Injectable()
@Resolver()
@UseGuards(SuperAdminGuard)
export class AnalyticsResolver {
    constructor(private analyticsService: AnalyticsService) {}

    @Query()
    @Allow(Permission.SuperAdmin)
    async storeAnalytics(
        @Context() ctx: RequestContext,
        @Args('filter') filter: { channelId?: string; days: number },
    ) {
        return this.analyticsService.getAnalytics({
            channelId: filter.channelId ? Number(filter.channelId) : null,
            days: filter.days ?? 30,
        });
    }

    @Query()
    @Allow(Permission.SuperAdmin)
    async storeAnalyticsSummary(
        @Context() ctx: RequestContext,
        @Args('filter') filter: { channelId?: string; days: number },
    ) {
        return this.analyticsService.getSummary({
            channelId: filter.channelId ? Number(filter.channelId) : null,
            days: filter.days ?? 30,
        });
    }

    @Query()
    @Allow(Permission.SuperAdmin)
    async storeRanking(
        @Context() ctx: RequestContext,
        @Args('channelId') channelId?: string,
        @Args('by') by?: string,
        @Args('limit') limit?: number,
    ) {
        return this.analyticsService.getRanking(
            channelId ? Number(channelId) : null,
            by ?? 'revenue',
            limit ?? 10,
        );
    }

    @Query()
    @Allow(Permission.SuperAdmin)
    async storeAnalyticsStoreList(
        @Context() ctx: RequestContext,
    ) {
        return this.analyticsService.getStoreListForFilter();
    }

    @Query()
    @Allow(Permission.SuperAdmin)
    async investorMetrics(
        @Context() ctx: RequestContext,
    ) {
        return this.analyticsService.getInvestorMetrics();
    }
}
