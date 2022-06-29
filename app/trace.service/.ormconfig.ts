import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import 'dotenv/config';

export declare type DriverType =
  | 'mysql'
  | 'postgres'
  | 'cockroachdb'
  | 'mariadb'
  | 'mssql';

export const ormConfig: DataSourceOptions = {
  name: 'default',
  type: (String(process.env.POSTGRES_DB_TYPE) as DriverType) || 'postgres',
  host: process.env.POSTGRES_DB_HOST || 'localhost',
  port: parseInt(<string>process.env.POSTGRES_DB_PORT),
  username: process.env.POSTGRES_USER || 'trace',
  password: process.env.POSTGRES_PASSWORD || 'trace',
  database: process.env.POSTGRES_DB_NAME || 'trace',
  entityPrefix: process.env.POSTGRES_TABLE_PREFIX || '',
  entities: [
    __dirname + '/libs/common/src/entity/**/*.entity.{ts,js}',
    __dirname + '/libs/module/src/**/*.entity.{ts,js}',
  ],
  migrations: ['database/migrations/*.{ts,js}'],
  subscribers: ['database/subscribers/*.{ts,js}'],
  synchronize: true,
  dropSchema: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const OrmConfig = {
  ...ormConfig,
  migrationsTableName: 'trace_migrations',
  cli: {
    migrationsDir: 'database/migrations',
  },
};

const appDataSource = new DataSource(OrmConfig);
appDataSource.initialize();
export const AppDataSource = appDataSource;

export default ormConfig;
