import { DeepPartial, VendureEntity } from '@vendure/core';
import { Column, Entity, Index } from 'typeorm';

export const MESSENGER_DOMIS_PROVIDER_CODE = 'messenger-domis';

@Entity('external_delivery_order')
@Index('IDX_external_delivery_order_order_code', ['orderCode'])
@Index('IDX_external_delivery_order_provider_document', ['provider', 'providerDocumentId'])
export class ExternalDeliveryOrder extends VendureEntity {
    constructor(input?: DeepPartial<ExternalDeliveryOrder>) {
        super(input);
    }

    @Column({ nullable: true })
    orderId: string | null;

    @Column({ nullable: true })
    orderCode: string | null;

    @Column({ nullable: true })
    sellerChannelCode: string | null;

    @Column({ nullable: true })
    sellerName: string | null;

    @Column({ default: MESSENGER_DOMIS_PROVIDER_CODE })
    provider: string;

    @Column({ nullable: true })
    providerDocumentId: string | null;

    @Column({ default: 'CREATED' })
    status: string;

    @Column({ nullable: true })
    statusLabel: string | null;

    @Column({ nullable: true })
    trackingUrl: string | null;

    @Column({ type: 'timestamp', nullable: true })
    statusUpdatedAt: Date | null;

    @Column({ type: 'simple-json', nullable: true })
    lastPayload: Record<string, unknown> | null;
}
