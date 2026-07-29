import { Injectable } from '@nestjs/common';
import { RequestContext, TransactionalConnection } from '@vendure/core';
import { INVOICE_JOB_QUEUE_NAME } from '../constants';
import { isDefaultAdminChannel } from './invoice-channel-scope.util';

export interface InvoiceEmissionQueueStatus {
  pendingCount: number;
  runningCount: number;
  retryingCount: number;
  /** Jobs aún no terminados en la cola `invoice-create`. */
  activeTotal: number;
}

/**
 * Cuenta jobs activos en la cola de emisión (tabla `job_record` del DefaultJobQueuePlugin).
 */
@Injectable()
export class InvoiceEmissionQueueStatusService {
  constructor(private readonly connection: TransactionalConnection) {}

  async getStatus(ctx: RequestContext): Promise<InvoiceEmissionQueueStatus> {
    const empty: InvoiceEmissionQueueStatus = {
      pendingCount: 0,
      runningCount: 0,
      retryingCount: 0,
      activeTotal: 0,
    };

    if (!isDefaultAdminChannel(ctx)) {
      return empty;
    }

    try {
      const ds = this.connection.rawConnection;
      const rows = (await ds.query(
        `
        SELECT state, COUNT(*)::int AS cnt
        FROM job_record
        WHERE "queueName" = $1
          AND state IN ('PENDING', 'RUNNING', 'RETRYING')
        GROUP BY state
      `,
        [INVOICE_JOB_QUEUE_NAME],
      )) as Array<{ state: string; cnt: number }>;

      let pendingCount = 0;
      let runningCount = 0;
      let retryingCount = 0;
      for (const r of rows) {
        const n = Number(r.cnt) || 0;
        if (r.state === 'PENDING') {
          pendingCount = n;
        } else if (r.state === 'RUNNING') {
          runningCount = n;
        } else if (r.state === 'RETRYING') {
          retryingCount = n;
        }
      }
      const activeTotal = pendingCount + runningCount + retryingCount;
      return { pendingCount, runningCount, retryingCount, activeTotal };
    } catch {
      return empty;
    }
  }
}
