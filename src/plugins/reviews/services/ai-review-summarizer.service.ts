import { Injectable } from '@nestjs/common';

@Injectable()
export class AIReviewSummarizer {
    // TODO: Reemplazar mock cuando el equipo entregue el endpoint de IA
    async generateSummary(reviews: string[]): Promise<{ title: string; summary: string }> {
        const aiServiceUrl = process.env.AI_SERVICE_URL;

        if (!aiServiceUrl) {
            // Mock temporal hasta que esté disponible el endpoint
            return {
                title: 'Opinión general',
                summary: 'Resumen pendiente de integración con servicio de IA.',
            };
        }

        try {
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

            return {
                title: 'Opinión general',
                summary: data.review || 'No se pudo generar un resumen.',
            };
        } catch (error) {
            throw new Error(`Failed to call AI service: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}