import { SetMetadata } from '@nestjs/common';

export const FEATURE_CODE_KEY = 'featureCode';
export const RequiresFeature = (featureCode: string) => SetMetadata(FEATURE_CODE_KEY, featureCode);
