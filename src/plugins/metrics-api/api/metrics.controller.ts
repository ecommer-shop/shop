import { Controller, Get, HttpException, HttpStatus, Logger, Headers } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller('api/metrics')
export class MetricsController {
    private readonly logger = new Logger(MetricsController.name);

    constructor(private metricsService: MetricsService) {}

    @Get('operational')
    async getOperationalMetrics(@Headers('x-metrics-api-key') apiKey: string) {
        const expectedKey = process.env.METRICS_API_KEY;
        if (!expectedKey || apiKey !== expectedKey) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
        try {
            return await this.metricsService.getOperationalMetrics();
        } catch (error: any) {
            this.logger.error(`Failed to get operational metrics: ${error.message}`);
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
