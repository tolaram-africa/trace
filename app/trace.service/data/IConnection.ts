export declare type SourceType =
  | 'mysql'
  | 'postgres'
  | 'cockroachdb'
  | 'mariadb'
  | 'mssql'
  | 'mongodb';

export interface IBaseSource {
  type: SourceType;
  host: string;
  port: number;
  database: string;
  synchronize: boolean;
  logging: boolean;
  entities?: Array<string>;
  migrations?: Array<string>;
  subscribers?: Array<string>;
}

export interface IOperationSource extends IBaseSource {
  username: string;
  password: string;
  entityPrefix: string;
  migrationsTableName: string;
  migrationsTransactionMode: 'all' | 'none' | 'each';
  synchronize: boolean;
  installExtensions: boolean;
  dropSchema: boolean;
}

export type IDocumentSource = IBaseSource;
