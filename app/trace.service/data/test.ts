import 'reflect-metadata';
import { dataSource } from '@@/data/operation';
import { Tenant } from '@/module/tenant/entity/tenant.entity';

(async () => {
  dataSource.setOptions({ synchronize: false });
  await dataSource.initialize().catch((error) => console.log(error));

  // const tenants = dataSource.getRepository<Tenant>(Tenant);
  const tenantsCount = await Tenant.count();
  const tenant = await Tenant.findOneBy({ active: true, uniqueId: 1 });

  console.log('**** Tenant count ****', tenantsCount);
  console.log('**** Tenant Name ****', tenant.name);

  // const teantResult = await tenants.findOneBy({ uniqueId: 1 });
  // const users = await User.findByTenant(tenant);
  // console.log('**** Tenant Users ****');
  // users.forEach((user) => console.log(user.firstName));
  // console.log(JSON.stringify(users));
})();
