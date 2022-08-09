export declare type DriverType =
  | 'mysql'
  | 'postgres'
  | 'cockroachdb'
  | 'mariadb'
  | 'mssql';

export interface IDataOperation {
  type: DriverType;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  logging: boolean;
  entityPrefix: string;
  migrationsTableName: string;
  migrationsTransactionMode: 'all' | 'none' | 'each';
  synchronize: boolean;
  installExtensions: boolean;
  dropSchema: boolean;
}
