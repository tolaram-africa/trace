import concurrently from 'concurrently';
import { getConfigValue, IServiceConfig } from './libs/config';

const config = getConfigValue('services') as unknown;
const services: Array<string> = Object.values(config).reduce(
  (total: Array<string>, value: IServiceConfig) => {
    if (!value.proxy) total.push(value.name);
    return total;
  },
  [],
);
const mode = process.env.CONCURRENTLY_BUILD !== '1' ? 'dev' : 'build';
const commands = services.map((service) => {
  return `pnpm ${mode} ${service}`;
});

concurrently([...commands], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
  restartTries: 3,
});
