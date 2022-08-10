import { INestApplication, Logger, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IServiceConfig, PROD_ENV, SERVICE_PROFILE } from './config';

interface IServiceInstance {
  name: string;
  host: string;
  port: number;
  app: INestApplication;
  url: string;
  logger?: Logger;
}

export const getStartupConfig = (
  app: INestApplication,
  name: SERVICE_PROFILE,
): IServiceConfig => {
  const configService = app.get<ConfigService>(ConfigService);
  return configService.getOrThrow<IServiceConfig>('services.' + name);
};

export const getServiceInstance = (
  app: INestApplication,
  name: SERVICE_PROFILE,
): IServiceInstance => {
  const configService = app.get<ConfigService>(ConfigService);
  const logMode = (
    PROD_ENV ? ['log', 'warn', 'error'] : ['debug', 'log', 'warn', 'error']
  ) as Array<LogLevel>;
  const logOptions =
    configService.getOrThrow<Array<LogLevel>>('app.logLevel') || logMode;
  app.useLogger(logOptions);
  const logger = new Logger();
  const config = getStartupConfig(app, name);

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
  service: INestApplication,
  profile: SERVICE_PROFILE,
): Promise<void> => {
  const { app, name, host, port, logger, url } = getServiceInstance(
    service,
    profile,
  );
  try {
    await app.listen(port, host, () => {
      logger.log('Service startup completed...');
      logger.log(`${name.toUpperCase()} service is listening on ${url}/`);
    });
  } catch (error) {
    logger.error('A Fatal error occurred', error);
  }
};
