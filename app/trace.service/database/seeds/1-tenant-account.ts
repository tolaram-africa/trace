import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { toWords } from 'number-to-words';
import {
  Tenant,
  TenantDomain,
  TenantNavigation,
  TenantSetting,
} from '@/module/tenant/entity';

export default class TenantRquirementSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const tenantRepo = dataSource.getRepository<Tenant>(Tenant);
    let dataArray: Array<Tenant> = [];

    const range = 2;
    for (let i = range - 1; i <= range; i++) {
      const count = toWords(i);
      const name = `Demo ${count}`;
      const dns = `demo-${name}.trace.ng`.toLowerCase();

      const setting = new TenantSetting();
      setting.Hour24Time = true;
      setting.language = 'en-us';

      const domain = new TenantDomain();
      domain.address = dns;
      domain.default = true;

      const navigation = new TenantNavigation();
      navigation.mapType = 'google';
      navigation.zoom = 7;
      navigation.zoomSelection = 15;
      navigation.mapCenter = {
        type: 'Point',
        coordinates: [12.726085, 2.654738],
      };

      const tenant = new Tenant();
      tenant.active = true;
      tenant.name = name;
      tenant.shortName = 'DM-' + i;
      tenant.setting = setting;
      tenant.navigation = navigation;
      tenant.domains = [domain];
      dataArray.push(tenant);
    }

    await tenantRepo.save(dataArray);
  }
}
