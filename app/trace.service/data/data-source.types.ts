import { DefaultNamingStrategy } from 'typeorm';

export declare type SourceType =
  | 'mysql'
  | 'postgres'
  | 'cockroachdb'
  | 'mariadb'
  | 'mssql'
  | 'mongodb';

export interface IBaseSource {
  type: SourceType;
  name?: string;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  database?: string;
  synchronize: boolean;
  logging: boolean;
  entities?: Array<string>;
  migrations?: Array<string>;
  subscribers?: Array<string>;
}

export interface IOperationSource extends IBaseSource {
  entityPrefix: string;
  migrationsTableName: string;
  migrationsTransactionMode: 'all' | 'none' | 'each';
  migrationsRun: boolean;
  namingStrategy: DefaultNamingStrategy;
  synchronize: boolean;
  installExtensions: boolean;
  dropSchema: boolean;
  extra: object;
}

export interface IDocumentSource extends IBaseSource {
  url?: string;
}
