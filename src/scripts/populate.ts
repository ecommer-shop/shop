import { bootstrap } from '@vendure/core';
import { populate } from '@vendure/core/cli';
import { config } from '../vendure-config';
import { initialData } from './initial-data';

populate(() => bootstrap(config), initialData, undefined)
  .then((app) => app.close())
  .then(
    () => process.exit(0),
    (err) => {
      console.log(err);
      process.exit(1);
    }
  );
