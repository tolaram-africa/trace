import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';

export default class TenantSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    // const tenantFactory = await factoryManager.get(Tenant);
    // await tenantFactory.saveMany(2);
  }
}
