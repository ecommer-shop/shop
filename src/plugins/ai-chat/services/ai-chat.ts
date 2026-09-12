import { Injectable } from '@nestjs/common';
import { RequestContext } from '@vendure/core';
 import { UrlFormatter } from './url-formatter';

@Injectable()
export class AiChat {
     private readonly urlFormatter = new UrlFormatter();
    /**
     * Envía un mensaje al servicio de IA y recibe una respuesta
     */
    async sendMessage(query: string, history: Array<{role: string, content: string}>): Promise<{response: string}> {
        try {
            const aiChatUrl = process.env.AI_CHAT_URL;
            if (!aiChatUrl) {
                throw new Error('AI_CHAT_URL environment variable is not defined');
            }

            const response = await fetch(aiChatUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    query
                }),
            });

            if (!response.ok) {
                throw new Error(`AI service responded with status: ${response.status}`);
            }

            const data = await response.json();
            const rawResponse = data.answer || '';

            // TEMPORALMENTE DESACTIVADO: El formateo de URLs está desactivado hasta que
            // el equipo de IA estandarice las respuestas con URLs de productos.
            // Cuando esté listo, descomentar las siguientes 2 líneas y comentar la línea de 'return' actual:
            const formattedResponse = this.urlFormatter.formatUrls(rawResponse);
            return { response: formattedResponse };
        } catch (error) {
            throw new Error(`Failed to call AI service: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}
