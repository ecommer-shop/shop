export type SocialLink = {
    platform: 'whatsapp' | 'facebook' | 'instagram';
    username: string;
    dmLink: string;
    profileUrl: string;
    displayName?: string | null;
    avatarUrl?: string | null;
    inPipeline: boolean;
    inboxId?: string | null;
    platformAccountId?: string | null;
    status: 'manual' | 'active';
    connectedAt: string;
};

export type SocialLinkInput = {
    platform: string;
    username: string;
    dmLink: string;
    profileUrl: string;
    displayName?: string | null;
    avatarUrl?: string | null;
    inPipeline: boolean;
    inboxId?: string | null;
    platformAccountId?: string | null;
    status?: string;
};

declare module '@vendure/core/dist/entity/custom-entity-fields' {
    interface CustomSellerFields {
        socialLinks?: string | null;
    }
}
