import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import 'dotenv/config';
import { join } from 'path';

export declare type DriverType =
  | 'mysql'
  | 'postgres'
  | 'cockroachdb'
  | 'mariadb'
  | 'mssql';

const production = process.env.NODE_ENV === 'production';

const entities = [
  join(__dirname, '../libs/common/src/entity/**/*.entity.{ts,js}'),
  join(__dirname, '../libs/module/src/**/*.entity.{ts,js}'),
];
const migrations = [join(__dirname, '/migrations/*.{ts,js}')];
const subscribers = [join(__dirname, '/subscribers/*.{ts,js}')];

export const dataSourceConfig: DataSourceOptions = {
  type: (String(process.env.POSTGRES_DB_TYPE) as DriverType) || 'postgres',
  host: process.env.POSTGRES_DB_HOST || 'localhost',
  port: parseInt(<string>process.env.POSTGRES_DB_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'trace',
  password: process.env.POSTGRES_PASSWORD || 'trace',
  database: process.env.POSTGRES_DB_NAME || 'trace',
  entityPrefix: process.env.POSTGRES_TABLE_PREFIX || '',
  migrationsRun: production,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'each',
  synchronize: !production,
  installExtensions: true,
  dropSchema: false,
  namingStrategy: new SnakeNamingStrategy(),
  logging: process.env.POSTGRES_LOGGING === 'true' ? true : false || true,
  entities,
  migrations,
  subscribers,
  extra: {
    characterSet: 'UTF8',
  },
};

export const dataSource = new DataSource(dataSourceConfig);
// TODO: Use on app startup
// dataSource.runMigrations()
