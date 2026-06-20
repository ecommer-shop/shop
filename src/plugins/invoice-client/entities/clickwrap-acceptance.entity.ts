import { DeepPartial, VendureEntity } from '@vendure/core';
import { Column, Entity, Index } from 'typeorm';

@Entity('invoice_clickwrap_acceptance')
@Index('IDX_invoice_clickwrap_acceptance_channel', ['channelId', 'acceptedAt'])
@Index('IDX_invoice_clickwrap_acceptance_admin', ['administratorId', 'acceptedAt'])
export class ClickwrapAcceptance extends VendureEntity {
  constructor(input?: DeepPartial<ClickwrapAcceptance>) {
    super(input);
  }

  @Column({ name: 'administrator_id', type: 'int', nullable: true })
  administratorId: number | null;

  @Column({ name: 'administrator_email', type: 'varchar', length: 255, nullable: true })
  administratorEmail: string | null;

  @Column({ name: 'user_id', type: 'int', nullable: true })
  userId: number | null;

  @Column({ name: 'channel_id', type: 'int', nullable: true })
  channelId: number | null;

  @Column({ name: 'channel_code', type: 'varchar', length: 255, nullable: true })
  channelCode: string | null;

  @Column({ name: 'contract_version', type: 'varchar', length: 64 })
  contractVersion: string;

  @Column({ name: 'contract_context', type: 'varchar', length: 128 })
  contractContext: string;

  @Column({ name: 'plan_name', type: 'varchar', length: 255 })
  planName: string;

  @Column({ name: 'plan_code', type: 'varchar', length: 128, nullable: true })
  planCode: string | null;

  @Column({ name: 'ip_address', type: 'varchar', length: 128, nullable: true })
  ipAddress: string | null;

  @Column({ name: 'user_agent', type: 'text', nullable: true })
  userAgent: string | null;

  @Column({ name: 'accepted_at', type: 'timestamp with time zone' })
  acceptedAt: Date;
}
