import { Injectable } from '@nestjs/common';
import { RequestContext, Permission, TransactionalConnection, Administrator, Logger } from '@vendure/core';
import { UrlFormatter } from './url-formatter';
import { BifrostService } from '../../bifrost/services/bifrost.service';

const loggerCtx = 'AiChatPlugin';

@Injectable()
export class AiChat {
    private readonly urlFormatter = new UrlFormatter();

    constructor(
        private bifrostService: BifrostService,
        private connection: TransactionalConnection,
    ) { }

    /**
     * Envía un mensaje al webhook de chat (chat.ecommer.shop) y recibe una respuesta.
     * Si el webhook falla, cae al servicio de IA de bifrost con la virtual key del usuario.
     */
    async sendMessage(
        ctx: RequestContext,
        query: string,
        history: Array<{ role: string, content: string }> = [],
    ): Promise<{ response: string }> {
        try {
            const rawResponse = await this.inferViaWebhook(ctx, query);
            return { response: this.urlFormatter.formatUrls(rawResponse) };
        } catch (webhookError) {
            Logger.warn(
                `Chat webhook failed, falling back to bifrost: ${webhookError instanceof Error ? webhookError.message : 'Unknown error'}`,
                loggerCtx,
            );
            const rawResponse = await this.inferViaBifrost(ctx, query, history);
            return { response: this.urlFormatter.formatUrls(rawResponse) };
        }
    }

    private async inferViaWebhook(ctx: RequestContext, query: string): Promise<string> {
        const webhookUrl = process.env.AI_CHAT_WEBHOOK_URL;
        if (!webhookUrl) {
            throw new Error('AI_CHAT_WEBHOOK_URL environment variable is not defined');
        }
        const secret = process.env.AI_CHAT_WEBHOOK_SECRET ?? '';
        const secretField = process.env.AI_CHAT_WEBHOOK_SECRET_FIELD ?? 'webhook_secret';

        const channel = ctx.channel;
        const payload: Record<string, string> = {
            id_tienda: channel?.id ? String(channel.id) : '1',
            origen: 'aplicacion_web',
            mensaje: query,
            usuario: channel?.code ?? 'default',
        };
        if (secret) {
            payload[secretField] = secret;
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Chat webhook responded with status: ${response.status}`);
        }

        const data = await response.json();
        const answer = data?.answer ?? '';
        if (!answer) {
            throw new Error('Chat webhook returned an empty response');
        }
        return answer;
    }

    private async inferViaBifrost(
        ctx: RequestContext,
        query: string,
        history: Array<{ role: string, content: string }>,
    ): Promise<string> {
        const isSuperAdmin = ctx.userHasPermissions([Permission.SuperAdmin]);
        const key = isSuperAdmin
            ? await this.bifrostService.getSuperAdminVK()
            : await this.resolveSellerKey(ctx);

        if (!key) {
            throw new Error('No bifrost virtual key available for this user');
        }

        const messages = [
            ...history.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: query },
        ];

        return this.bifrostService.infer(key, messages);
    }

    private async resolveSellerKey(ctx: RequestContext) {
        if (!ctx.activeUserId) {
            return null;
        }
        const repo = this.connection.rawConnection.getRepository(Administrator);
        const admin = await repo.findOne({ where: { user: { id: Number(ctx.activeUserId) } } });
        if (!admin) return null;
        return this.bifrostService.getSellerVK(Number(admin.id));
    }
}
