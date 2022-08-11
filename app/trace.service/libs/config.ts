import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { load } from 'js-yaml';
import { getObjectValue } from './util/objectHelper';

const DEV_CONFIG_ROOT = '/config';
export const PROD_ENV = process.env.NODE_ENV === 'production';

export interface IServiceConfig {
  proxy: boolean;
  name: string;
  host: string;
  port: number;
}

export enum SERVICE_PROFILE {
  SRV_GATEWAY = 'gateway',
  SRV_MANAGER = 'manager',
  SRV_IDENTITY = 'identity',
  SRV_INTEGRATION = 'integration',
  SRV_OPERATION = 'operation',
  SRV_NAVIGATION = 'navigation',
}

export const getConfigPath = (): string => {
  const file = PROD_ENV ? 'config.yaml' : 'config.dev.yaml';
  const config = join(process.cwd(), file);
  try {
    if (existsSync(config)) return config;
  } catch (err) {
    throw err;
  }
  return file;
};

export const getServicePath = (service: SERVICE_PROFILE): string => {
  const serviceRoot = PROD_ENV
    ? process.cwd()
    : join(process.cwd(), DEV_CONFIG_ROOT);
  const serviceConfig = join(
    serviceRoot,
    PROD_ENV ? 'service.yaml' : `service.${service}.yaml`,
  );
  try {
    if (existsSync(serviceConfig)) return serviceConfig;
  } catch (err) {
    throw err;
  }
  return serviceConfig;
};

export const getConfig = (): Record<string, unknown> => {
  let config: Record<string, unknown>;
  try {
    const file = readFileSync(getConfigPath(), 'utf8');
    config = load(file) as Record<string, unknown>;
  } catch (err) {
    throw err;
  }
  return config;
};

export const getServiceConfig = (
  service: SERVICE_PROFILE,
): Record<string, unknown> => {
  let config: Record<string, unknown>;
  try {
    const file = readFileSync(getServicePath(service), 'utf8');
    config = {
      ...getConfig(),
      service: load(file) as Record<string, unknown>,
    };
  } catch (err) {
    throw err;
  }
  return config;
};

export const getConfigValue = (text: string): Record<string, unknown> => {
  let config: Record<string, unknown>;
  try {
    config = getObjectValue(getConfig(), text);
  } catch (error) {
    throw error;
  }
  return config;
};

export const getServiceValue = (
  service: SERVICE_PROFILE,
  text: string,
): Record<string, unknown> => {
  let config: Record<string, unknown>;
  try {
    config = getObjectValue(getServiceConfig(service), text);
  } catch (error) {
    throw error;
  }
  return config;
};
