import 'reflect-metadata';
import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import { extendDataSourceOptions, createDatabase } from 'typeorm-extension';
import { dataSource } from './.orm.config';
import { SeederOptions } from 'typeorm-extension';
import { join } from 'path';

const moduleRoot = join(__dirname, '../libs/module/src/');
const seeds = [
  join(__dirname, '/seeds/**/*.{ts,js}'),
  join(moduleRoot, '**/*.seeder.{ts,js}'),
];
const factories = [join(moduleRoot, '**/*.factory.{ts,js}')];
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
