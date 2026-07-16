import { Injectable } from '@nestjs/common';

interface RateLimitEntry {
    attempts: number[];
    windowStart: number;
}

@Injectable()
export class RateLimitService {
    private store = new Map<string, RateLimitEntry>();
    private readonly MAX_ATTEMPTS = 3;
    private readonly WINDOW_MS = 60 * 60 * 1000;

    checkLimit(customerId: string): boolean {
        const now = Date.now();
        const entry = this.store.get(customerId);

        if (!entry || now - entry.windowStart > this.WINDOW_MS) {
            this.store.set(customerId, { attempts: [now], windowStart: now });
            return true;
        }

        const recent = entry.attempts.filter(t => now - t < this.WINDOW_MS);
        if (recent.length >= this.MAX_ATTEMPTS) {
            return false;
        }

        recent.push(now);
        entry.attempts = recent;
        return true;
    }

    resetLimit(customerId: string): void {
        this.store.delete(customerId);
    }
}
