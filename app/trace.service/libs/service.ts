import {
  INestApplication,
  Logger,
  LogLevel,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IServiceConfig, PROD_ENV, SERVICE_PROFILE } from './config';
import { graphqlUploadExpress } from 'graphql-upload';
import * as helmet from 'helmet';

interface IServiceInstance {
  name: string;
  host: string;
  port: number;
  app: INestApplication;
  url: string;
  logger?: Logger;
}

export const getServiceInstance = (
  app: INestApplication,
  name: SERVICE_PROFILE,
): IServiceInstance => {
  const configService = app.get<ConfigService>(ConfigService);
  const config = configService.getOrThrow<IServiceConfig>('services.' + name);
  const logMode = (
    PROD_ENV
      ? ['log', 'warn', 'error']
      : ['debug', 'log', 'warn', 'error', 'verbose']
  ) as Array<LogLevel>;
  const logOptions =
    configService.getOrThrow<Array<LogLevel>>('app.logLevel') || logMode;
  app.useLogger(logOptions);
  app.useGlobalPipes(new ValidationPipe());
  const logger = new Logger();

  /* Try starting up server. */
  logger.log(`Starting service ${config.name}...`);
  return {
    name: config.name,
    host: config.host,
    port: config.port,
    app,
    url: `http://${config.host}:${config.port}`,
    logger,
  };
};

export const bootstrapService = async (
  context: IServiceInstance,
  optinalContext = true,
): Promise<void> => {
  const { app, name, host, port, logger, url } = context;
  if (optinalContext) {
    app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }));
    app.enableCors({
      exposedHeaders: 'X-Document-Name',
    });
    app.use(helmet());
    app.use(helmet.noSniff());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.contentSecurityPolicy());
  }
  try {
    await app.listen(port, host, () => {
      logger.log('Service startup completed...');
      logger.log(`${name.toUpperCase()} service is listening on ${url}/`);
    });
  } catch (error) {
    logger.error('A Fatal error occurred', error);
  }
};
