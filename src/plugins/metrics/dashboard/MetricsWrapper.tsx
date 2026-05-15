import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AdvancedMetricsWidget } from './advanced-metrics-widget';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

export default function MetricsWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <AdvancedMetricsWidget />
    </QueryClientProvider>
  );
}
