import { Query, Resolver } from '@nestjs/graphql';
import { Allow, Permission } from '@vendure/core';
import { MetricsService } from './metrics.service';

@Resolver()
export class MetricsResolver {
    constructor(private metricsService: MetricsService) {}

    @Query()
    @Allow(Permission.SuperAdmin)
    async operationalMetrics() {
        return this.metricsService.getOperationalMetrics();
    }
}
