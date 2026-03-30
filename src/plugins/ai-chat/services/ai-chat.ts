import { Injectable } from '@nestjs/common';
import { RequestContext } from '@vendure/core';

@Injectable()
export class AiChat {
    /**
     * Envía un mensaje al servicio de IA y recibe una respuesta
     */
    async sendMessage(message: string, history: Array<{role: string, content: string}>): Promise<{response: string}> {
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
                    message
                }),
            });

            if (!response.ok) {
                throw new Error(`AI service responded with status: ${response.status}`);
            }

            const data = await response.json();

            return {
                response: data.answer || ''
            };
        } catch (error) {
            throw new Error(`Failed to call AI service: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}
