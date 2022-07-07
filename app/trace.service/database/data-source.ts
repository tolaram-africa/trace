import 'reflect-metadata';
import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import { extendDataSourceOptions, createDatabase } from 'typeorm-extension';
import { dataSource } from './.orm.config';
import { SeederOptions } from 'typeorm-extension';

const path = require('path');
const root = '../libs/module/src/';
const seeds = [
  path.join(__dirname, '/seeds/**/*.{ts,js}'),
  path.join(__dirname, root + '**/*.seeder.{ts,js}'),
];
const factories = [path.join(__dirname, root + '**/*.factory.{ts,js}')];
const options = dataSource.options;
const config: SeederOptions & DataSourceOptions & any = {
  options,
  seeds,
  factories,
};
dataSource.setOptions(config);
export const source = dataSource.setOptions({ synchronize: false });
(async () => {
  await source.initialize();
  const options = await extendDataSourceOptions(dataSource.options);
  await createDatabase({
    ifNotExist: true,
    options,
  });
})();
