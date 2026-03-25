import { Injectable } from '@nestjs/common';

@Injectable()
export class AIReviewSummarizer {
    async generateSummary(reviews: string[]): Promise<{ title: string; summary: string }> {
        const aiServiceUrl = process.env.AI_SERVICE_URL;

        if (!aiServiceUrl) {
            throw new Error('AI_SERVICE_URL environment variable is not defined');
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

            // Extraer título del primer fortaleza detectada, si existe
            const title = data.fortalezas?.[0]?.tema ?? 'Opinión general';
            const summary = data.resumen_ejecutivo ?? 'No se pudo generar un resumen.';

            return { title, summary };
        } catch (error) {
            throw new Error(`Failed to call AI service: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}