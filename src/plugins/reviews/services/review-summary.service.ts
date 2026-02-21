import { Injectable } from '@nestjs/common';
import { ID, RequestContext, TransactionalConnection } from '@vendure/core';

import { ProductAISummary } from '../entities/product-ai-summary.entity';
import { ProductAISummaryTranslation } from '../entities/product-ai-summary-translation.entity';
import { ProductReview } from '../entities/product-review.entity';
import type { ReviewState } from '../types';

@Injectable()
export class ReviewSummaryService {
    constructor(private connection: TransactionalConnection) {}

    /**
     * Determina si se debe generar un nuevo resumen de IA para el producto
     */
    async shouldGenerateSummary(ctx: RequestContext, productId: ID): Promise<boolean> {
        // Contar reviews aprobadas
        const approvedCount = await this.connection
            .getRepository(ctx, ProductReview)
            .createQueryBuilder('review')
            .where('review.productId = :productId', { productId })
            .andWhere('review.state = :state', { state: 'approved' as ReviewState })
            .getCount();

        // Si menos de 5 reviews, no generar
        if (approvedCount < 5) {
            return false;
        }

        // Buscar resumen existente
        const existingSummary = await this.connection
            .getRepository(ctx, ProductAISummary)
            .findOne({
                where: { productId },
            });

        // Si no existe, es la primera vez
        if (!existingSummary) {
            return true;
        }

        // Calcular reviews nuevas
        const newReviews = approvedCount - existingSummary.basedOnReviewsCount;

        // Calcular rating actual vs rating cuando se generó
        const currentRating = await this.getAverageRating(ctx, productId);
        const ratingDiff = Math.abs(currentRating - Number(existingSummary.averageRatingWhenGenerated));

        // Regenerar si: 10+ reviews nuevas O cambio de rating > 0.5
        return newReviews >= 10 || ratingDiff > 0.5;
    }

    /**
     * Genera un nuevo resumen de IA para el producto
     */
    async generateSummary(ctx: RequestContext, productId: ID): Promise<ProductAISummary> {
        // Obtener todas las reviews aprobadas ordenadas por fecha
        const reviews = await this.connection
            .getRepository(ctx, ProductReview)
            .createQueryBuilder('review')
            .where('review.productId = :productId', { productId })
            .andWhere('review.state = :state', { state: 'approved' as ReviewState })
            .orderBy('review.createdAt', 'DESC')
            .getMany();

        if (reviews.length === 0) {
            throw new Error('No approved reviews found for this product');
        }

        // Preparar array de textos para enviar a IA
        const reviewTexts = reviews.map(r => r.body);

        // Llamar al servicio de IA
        const aiResponse = await this.callAIService(reviewTexts);

        // Calcular rating promedio actual
        const averageRating = await this.getAverageRating(ctx, productId);

        // Buscar o crear ProductAISummary
        let summary = await this.connection
            .getRepository(ctx, ProductAISummary)
            .findOne({
                where: { productId },
                relations: ['translations'],
            });

        if (!summary) {
            summary = new ProductAISummary();
            summary.productId = productId;
            summary.product = { id: productId } as any;
            (summary as any).translations = [];
        }

        // Actualizar datos del resumen
        summary.basedOnReviewsCount = reviews.length;
        summary.averageRatingWhenGenerated = averageRating;
        summary.lastReviewIdIncluded = reviews[0].id;
        summary.generatedAt = new Date();

        // Guardar/actualizar el resumen
        summary = await this.connection.getRepository(ctx, ProductAISummary).save(summary);

        // Crear o actualizar traducción
        const translations = await this.connection
            .getRepository(ctx, ProductAISummaryTranslation)
            .find({ where: { base: { id: summary.id } } });

        let translation = translations.find(t => t.languageCode === 'es');

        if (!translation) {
            translation = new ProductAISummaryTranslation();
            translation.base = summary;
            (translation as any).languageCode = 'es';
        }

        translation.title = aiResponse.title;
        translation.summary = aiResponse.summary;

        await this.connection
            .getRepository(ctx, ProductAISummaryTranslation)
            .save(translation);

        // Recargar con relaciones
        return this.getSummary(ctx, productId) as Promise<ProductAISummary>;
    }

    /**
     * Obtiene el resumen de IA para un producto
     */
    async getSummary(ctx: RequestContext, productId: ID): Promise<ProductAISummary | null> {
        return this.connection
            .getRepository(ctx, ProductAISummary)
            .findOne({
                where: { productId },
                relations: ['translations'],
            });
    }

    /**
     * Calcula el rating promedio de un producto
     */
    async getAverageRating(ctx: RequestContext, productId: ID): Promise<number> {
        const result = await this.connection
            .getRepository(ctx, ProductReview)
            .createQueryBuilder('review')
            .select('AVG(review.rating)', 'avg')
            .where('review.productId = :productId', { productId })
            .andWhere('review.state = :state', { state: 'approved' as ReviewState })
            .getRawOne();

        return result?.avg ? parseFloat(result.avg) : 0;
    }

    /**
     * Llama al servicio de IA para generar un resumen
     * URL configurada en variable de entorno AI_SERVICE_URL
     */
    async callAIService(reviews: string[]): Promise<{ title: string; summary: string }> {
        try {
            const aiServiceUrl = process.env.AI_SERVICE_URL;
            if (!aiServiceUrl) {
                throw new Error('AI_SERVICE_URL environment variable is not defined');
            }

            const response = await fetch(aiServiceUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ reviews }),
            });

            if (!response.ok) {
                throw new Error(`AI service responded with status: ${response.status}`);
            }

            const data = await response.json();

            // Por ahora asumir que devuelve: { "review": "texto del resumen" }
            // TODO: Mejorar cuando tengan el formato final con title + summary
            return {
                title: 'Opinión general',
                summary: data.review || 'No se pudo generar un resumen.',
            };
        } catch (error) {
            throw new Error(`Failed to call AI service: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}
