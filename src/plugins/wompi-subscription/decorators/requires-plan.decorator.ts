import { SetMetadata } from '@nestjs/common';

export const REQUIRED_PLAN_KEY = 'requiredPlan';
export const RequiresPlan = (planName: string) => SetMetadata(REQUIRED_PLAN_KEY, planName);
