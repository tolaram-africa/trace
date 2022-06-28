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
  host: process.env.POSTGRES_DB_HOST,
  port: parseInt(<string>process.env.POSTGRES_DB_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
  entityPrefix: process.env.POSTGRES_TABLE_PREFIX || '',
  entities: [__dirname + '/src/model/**/*.entity.{ts,js}'],
  migrations: ['/src/migrations/*.{ts,js}'],
  subscribers: [],
  synchronize: true,
  dropSchema: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const OrmConfig = {
  ...ormConfig,
  migrationsTableName: 'trace_migrations',
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/model',
  },
};
const appDataSource = new DataSource(OrmConfig);
appDataSource.initialize();
export const AppDataSource = appDataSource;

export default ormConfig;
