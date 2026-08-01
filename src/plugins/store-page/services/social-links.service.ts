import { Injectable } from '@nestjs/common';
import {
    Channel,
    Logger,
    RequestContext,
    Seller,
    TransactionalConnection,
    UserInputError,
} from '@vendure/core';
import { SocialLink, SocialLinkInput } from '../types/social-link';

const loggerCtx = 'SocialLinksService';

@Injectable()
export class SocialLinksService {
    constructor(private connection: TransactionalConnection) {}

    async get(ctx: RequestContext): Promise<SocialLink[]> {
        const seller = await this.findSellerByChannel(ctx);
        return parseSocialLinksJson(seller?.customFields?.socialLinks);
    }

    async update(ctx: RequestContext, links: SocialLinkInput[]): Promise<boolean> {
        const seller = await this.findSellerByChannel(ctx);
        if (!seller) {
            throw new UserInputError('Vendedor no encontrado para este canal');
        }

        for (const link of links) {
            this.validateLink(link);
        }

        seller.customFields.socialLinks = JSON.stringify(links);
        await this.connection.getRepository(ctx, Seller).save(seller);
        Logger.info(`Social links updated for seller ${seller.id}`, loggerCtx);
        return true;
    }

    private validateLink(link: SocialLinkInput): void {
        const { platform, dmLink } = link;
        if (!link.username?.trim()) {
            throw new UserInputError(`El username es requerido para ${platform}`);
        }
        if (!dmLink?.trim()) {
            throw new UserInputError(`El DM link es requerido para ${platform}`);
        }
        try {
            new URL(dmLink);
        } catch {
            throw new UserInputError(`DM link inválido para ${platform}: ${dmLink}`);
        }
    }

    private async findSellerByChannel(ctx: RequestContext): Promise<Seller | null> {
        const channel = await this.connection.getRepository(ctx, Channel).findOne({
            where: { id: ctx.channelId },
            relations: ['seller'],
        });
        return channel?.seller ?? null;
    }
}

export function parseSocialLinksJson(raw: string | null | undefined): SocialLink[] {
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((l: any) => l?.platform && l?.username).map((l: any) => ({
            platform: l.platform,
            username: l.username,
            dmLink: l.dmLink || '',
            profileUrl: l.profileUrl || '',
            displayName: l.displayName ?? null,
            avatarUrl: l.avatarUrl ?? null,
            inPipeline: l.inPipeline ?? (l.platform === 'whatsapp'),
            inboxId: l.inboxId ?? null,
            platformAccountId: l.platformAccountId ?? null,
            status: l.status || 'manual',
            connectedAt: l.connectedAt || new Date().toISOString(),
        }));
    } catch {
        return [];
    }
}
