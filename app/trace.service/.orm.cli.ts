import { DataSource, DataSourceOptions } from 'typeorm';
import { dataSourceConfig } from './.orm.config';

const path = require('path');
const migrationsDir = path.join(__dirname, 'database/migrations');
const subscribersDir = path.join(__dirname, 'database/subscribers');

const config: DataSourceOptions & any = {
  ...dataSourceConfig,
  cli: {
    migrationsDir,
    subscribersDir,
  },
};

export const dataSource = new DataSource(config);
dataSource.initialize();
