import { Injectable } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { PlanManagementService } from '../services/plan-management.service';

@Injectable()
@Resolver()
export class PlanResolver {
    constructor(
        private planManagementService: PlanManagementService,
    ) { }

    @Query('allPlans')
    async getAllPlans() {
        return this.planManagementService.getAllPlans();
    }
}
