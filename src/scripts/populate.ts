import path from 'path';
import { bootstrap, defaultConfig, mergeConfig } from '@vendure/core';
import { populate } from '@vendure/core/cli';
import { config } from '../vendure-config';
import { initialData } from './initial-data';

const populateConfig = mergeConfig(defaultConfig, config);

populate(
  () =>
    bootstrap(populateConfig).then((app) => {
      return app;
    }),
  initialData,
  undefined
)
  .then(() => {
    console.log('Populated DB!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
