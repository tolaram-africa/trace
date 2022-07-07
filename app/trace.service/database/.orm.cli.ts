import { DataSourceOptions } from 'typeorm';
import { dataSource } from './.orm.config';

const path = require('path');
const migrationsDir = path.join(__dirname, '/migrations');
const subscribersDir = path.join(__dirname, '/subscribers');
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
