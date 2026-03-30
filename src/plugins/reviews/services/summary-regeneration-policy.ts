import { Injectable } from '@nestjs/common';

import { ProductAISummary } from '../entities/product-ai-summary.entity';

interface RegenerationParams {
    approvedCount: number;
    existingSummary: ProductAISummary | null;
    currentRating: number;
}

@Injectable()
export class SummaryRegenerationPolicy {
    shouldRegenerate(params: RegenerationParams): boolean {
        const { approvedCount, existingSummary, currentRating } = params;

        // Regla 1: mínimo 5 reviews para generar
        if (approvedCount < 5) {
            return false;
        }

        // Regla 2: no existe resumen, es la primera vez
        if (!existingSummary) {
            return true;
        }

        // Regla 3: 10+ reviews nuevas desde la última generación
        const newReviews = approvedCount - existingSummary.basedOnReviewsCount;

        // Regla 4: diferencia de rating mayor a 0.5
        const ratingDiff = Math.abs(currentRating - Number(existingSummary.averageRatingWhenGenerated));

        return newReviews >= 10 || ratingDiff > 0.5;
    }
}