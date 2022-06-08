import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

export const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_DB_HOST,
  port: parseInt(<string>process.env.POSTGRES_DB_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
  entities: [__dirname + '/src/model/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/src/migrations/*.{ts,js}'],
  subscribers: [__dirname + '/src/subscriber/*.{ts,js}'],
  synchronize: true,
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

export const AppDataSource = new DataSource(OrmConfig);

AppDataSource.initialize();

export default ormConfig;
