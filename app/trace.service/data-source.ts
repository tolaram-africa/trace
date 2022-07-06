import 'reflect-metadata';
import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { extendDataSourceOptions, createDatabase } from 'typeorm-extension';
import { dataSourceConfig } from './.orm.config';
import { SeederOptions } from 'typeorm-extension';

const path = require('path');
const root = '/libs/module/src/';
const seeds = [
  path.join(__dirname, '/database/seeds/**/*.{ts,js}'),
  path.join(__dirname, root + '**/*.seeder.{ts,js}'),
];
const factories = [path.join(__dirname, root + '**/*.factory.{ts,js}')];

const config: SeederOptions & DataSourceOptions = {
  ...dataSourceConfig,
  seeds,
  factories,
};
export const dataSource = new DataSource(config);
(async () => {
  dataSource.setOptions({ synchronize: false });
  await dataSource.initialize();
  const options = await extendDataSourceOptions(dataSource.options);
  await createDatabase({
    ifNotExist: true,
    options,
  });
})();
