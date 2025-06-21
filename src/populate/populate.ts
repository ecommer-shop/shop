import { bootstrap, DefaultJobQueuePlugin } from '@vendure/core';
import { populate } from '@vendure/core/cli';
import path from 'path';

import { config } from '../vendure-config';
import { initialData } from './initial-data';

const productsCsvFile = path.join(__dirname, 'products.csv');

const populateConfig = {
  ...config,
  plugins: (config.plugins || []).filter(
    // Remove your JobQueuePlugin during populating to avoid
    // generating lots of unnecessary jobs as the Collections get created.
    (plugin) => plugin !== DefaultJobQueuePlugin
  ),
};

// populate the db with custom data
populate(
  () => bootstrap(populateConfig),
  initialData,
  productsCsvFile
  // 'my-channel-token' // optional - used to assign imported
)
  .then((app) => {
    return app.close();
  })
  .then(
    () => process.exit(0),
    (err) => {
      console.log(err);
      process.exit(1);
    }
  );
