import { DataSourceOptions } from 'typeorm';
import { dataSource } from './operation';
import { join } from 'path';

const migrationsDir = join(__dirname, '/migrations');
const subscribersDir = join(__dirname, '/subscribers');
const options = dataSource.options;
const config: DataSourceOptions & any = {
  ...options,
  cli: {
    migrationsDir,
    subscribersDir,
  },
};
export const source = dataSource.setOptions(config);
source.initialize();
