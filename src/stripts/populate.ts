import path from 'path';
import { bootstrap, defaultConfig, mergeConfig } from '@vendure/core';
import { populate } from '@vendure/core/cli';
import { initialData } from './initial-data'; // You must create/edit this file
import { config } from 'src/vendure-config';

const populateConfig = mergeConfig(defaultConfig, config);

populate(
  () =>
    bootstrap(populateConfig).then((app) => {
      return app;
    }),
  initialData,
  path.join(__dirname, 'assets/products.csv') // or wherever your CSV is
)
  .then(() => {
    console.log('Populated DB!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
