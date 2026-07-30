import { Channel, RequestContext } from '@vendure/core';
import { DEFAULT_CHANNEL_CODE } from '@vendure/common/lib/shared-constants';
import { CHANNEL_MATIAS_INVOICE_PREFIX_FIELD } from '../constants';

export function isDefaultAdminChannel(ctx: RequestContext): boolean {
  return ctx.channel?.code === DEFAULT_CHANNEL_CODE;
}

export function readChannelInvoicePrefix(channel: Channel): string | null {
  const raw = (channel.customFields as Record<string, unknown> | undefined)?.[
    CHANNEL_MATIAS_INVOICE_PREFIX_FIELD
  ];
  const trimmed = typeof raw === 'string' ? raw.trim() : '';
  return trimmed || null;
}
