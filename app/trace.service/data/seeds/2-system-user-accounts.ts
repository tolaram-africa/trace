import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { toWords } from 'number-to-words';
import { User } from '@/module/user/entity/user.entity';
import { Tenant } from '@/module/tenant/entity';

export default class SystemUserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const tenantRepo = dataSource.getRepository<User>(User);

    // await tenantRepo.save(dataArray);
  }
}
