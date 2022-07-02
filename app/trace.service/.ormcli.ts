import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ormConfig } from './.ormconfig';

export const OrmConfig = {
  ...ormConfig,
  cli: {
    migrationsDir: 'database/migrations',
  },
};

const appDataSource = new DataSource(OrmConfig);
appDataSource.initialize();

export const AppDataSource = appDataSource;

export default ormConfig;
