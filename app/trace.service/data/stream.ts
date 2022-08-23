import 'reflect-metadata';
import { getConfigValue } from '@@/libs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { IDocumentSource } from './data-source.types';

const SOURCE_NAME = 'stream';
const production = process.env.NODE_ENV === 'production';
const config = getConfigValue(
  'database.' + SOURCE_NAME,
) as unknown as IDocumentSource;
const entities = [];
const migrations = [];
const subscribers = [];
const custom = 'mongodb://trace:trace@127.0.0.1:27017/?authMechanism=DEFAULT';

export const DocumentSource: DataSourceOptions = {
  type: config.type || 'mongodb',
  name: config.name || SOURCE_NAME,
  url: config.url || custom,
  useNewUrlParser: true,
  host: config.host || '127.0.0.1',
  port: config.port || 27017,
  username: config.username || 'trace',
  password: config.password || 'trace',
  // database: config.database || 'trace',
  authMechanism: 'DEFAULT',
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
