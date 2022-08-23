import {
  INestApplication,
  Logger,
  LogLevel,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IServiceConfig, PROD_ENV, SERVICE_PROFILE } from './config';
import { graphqlUploadExpress } from 'graphql-upload';

export interface IServiceInstance {
  name: string;
  host: string;
  port: number;
  app: INestApplication;
  url: string;
  logger?: Logger;
}

export const getServiceInstance = (
  app: INestApplication,
  profile: SERVICE_PROFILE,
): IServiceInstance => {
  const configService = app.get<ConfigService>(ConfigService);
  const config = configService.getOrThrow<IServiceConfig>(
    `services.${profile}`,
  );
  const PROD_LOG_LEVEL = ['log', 'warn', 'error'];
  const DEV_LOG_LEVEL = ['debug', 'log', 'warn', 'error', 'verbose'];
  const { name, host, port } = config;
  const LOG_MODE = (
    PROD_ENV ? PROD_LOG_LEVEL : DEV_LOG_LEVEL
  ) as Array<LogLevel>;
  const logOptions =
    configService.getOrThrow<Array<LogLevel>>('app.logLevel') || LOG_MODE;
  app.useLogger(logOptions);
  app.useGlobalPipes(new ValidationPipe());
  const logger = new Logger('bootstrap');
  // logger.log(`Starting service ${name}...`);
  return {
    name,
    host,
    port,
    app,
    url: `http://${host}:${port}`,
    logger,
  };
};

const defaultStartExec = (ctx: IServiceInstance) => {
  ctx.logger.log(`Starting service ${ctx.name}...`);
  return ctx;
};

const defaultEndExec = (ctx: IServiceInstance) => {
  const { name, logger, url } = ctx;
  logger.log('Service startup completed...');
  logger.log(`${name.toUpperCase()} service is listening on ${url}/`);
  return ctx;
};

export const bootstrapService = async (
  context: IServiceInstance,
  optinalContext = true,
  endExec: (ctx: IServiceInstance) => void = defaultEndExec,
  startExec: (ctx: IServiceInstance) => IServiceInstance = defaultStartExec,
): Promise<void> => {
  const { app, host, port, logger } = startExec(context);
  if (optinalContext) {
    app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }));
    app.enableCors({
      exposedHeaders: 'X-Document-Name',
    });
  } else app.enableCors();
  try {
    await app.listen(port, host, () => {
      endExec(context);
    });
  } catch (error) {
    logger.error('A Fatal error occurred', error);
  }
};
