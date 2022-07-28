import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { load } from 'js-yaml';

const DEV_CONFIG_ROOT = '/config';
export const prodEnv = process.env.NODE_ENV === 'production';

export enum ConfigConsumer {
  MAIN = 'config',
  SRV_GATEWAY = 'gateway',
  SRV_MANAGER = 'manager',
  SRV_IDENTITY = 'identity',
  SRV_INTEGRATION = 'integration',
  SRV_OPERATION = 'operation',
  SRV_NAVIGATION = 'navigation',
}

export const resolveConfig = (
  service: ConfigConsumer,
): Record<string, unknown> => {
  let configValue = {} as Record<string, unknown>;
  const paths = resolveConfigPath(service);
  paths.forEach((path: string) => {
    const file = readFileSync(path, 'utf8');
    const parsedFile = load(file) as Record<string, unknown>;
    configValue = { ...configValue, ...parsedFile };
  });

  return configValue;
};

export const resolveConfigPath = (service: ConfigConsumer): Array<string> => {
  const resolvedConfig: Array<string> = [];
  const mainConfig = prodEnv ? 'config.yaml' : 'config.dev.yaml';
  resolvedConfig.push(join(process.cwd(), mainConfig));

  const serviceConfigRoot = prodEnv
    ? process.cwd()
    : join(process.cwd(), DEV_CONFIG_ROOT);

  if (service === ConfigConsumer.MAIN) return resolvedConfig;
  const serviceConfig = join(serviceConfigRoot, `service.${service}.yaml`);
  existsSync(serviceConfig) ? resolvedConfig.push(serviceConfig) : null;

  return resolvedConfig;
};

console.log(resolveConfig(ConfigConsumer.SRV_GATEWAY));
