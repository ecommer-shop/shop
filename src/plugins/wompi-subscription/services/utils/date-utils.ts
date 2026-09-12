import { BillingInterval } from '../../entities/plan.entity';

export function calculateEndDate(interval: BillingInterval, fromDate?: Date): Date {
    const startDate = fromDate || new Date();
    const endDate = new Date(startDate);

    if (interval === BillingInterval.MONTHLY) {
        endDate.setMonth(endDate.getMonth() + 1);
    } else if (interval === BillingInterval.YEARLY) {
        endDate.setFullYear(endDate.getFullYear() + 1);
    }

    return endDate;
}
