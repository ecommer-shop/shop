import { graphql, ResultOf } from '@/gql';

export const advancedMetricSummariesDocument = graphql(`
  query AdvancedMetricSummaries($input: AdvancedMetricSummaryInput) {
    advancedMetricSummaries(input: $input) {
      code
      title
      type
      allowProductSelection
      labels
      series {
        name
        values
      }
    }
  }
`);

export type AdvancedMetricSummariesResult = ResultOf<typeof advancedMetricSummariesDocument>;
export type AdvancedMetricSummary = AdvancedMetricSummariesResult['advancedMetricSummaries'][number];
