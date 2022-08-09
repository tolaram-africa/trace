import 'reflect-metadata';
import { getConfigValue } from '@@/libs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { IDocumentSource } from './IConnection';

const production = process.env.NODE_ENV === 'production';
const config = getConfigValue(
  'database.document',
) as unknown as IDocumentSource;

const entities = [];
const migrations = [];
const subscribers = [];

export const DocumentSource: DataSourceOptions = {
  type: config.type || 'mongodb',
  host: config.host || '127.0.0.1',
  port: config.port || 27017,
  database: config.database || 'trace',
  synchronize: config.synchronize && !production,
  namingStrategy: new SnakeNamingStrategy(),
  logging: config.logging || true,
  entities,
  migrations,
  subscribers,
  extra: {
    characterSet: 'UTF8',
  },
};

export const dataSource = new DataSource(DocumentSource);
