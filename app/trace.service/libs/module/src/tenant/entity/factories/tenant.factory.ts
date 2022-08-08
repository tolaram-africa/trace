/*
import { setSeederFactory } from 'typeorm-extension';
import { TenantDomain } from '../tenant.domain.entity';
import { Tenant } from '../tenant.entity';
import { TenantNavigation } from '../tenant.navigation.entity';
import { TenantSetting } from '../tenant.setting.entity';

export default setSeederFactory(Tenant, (faker) => {
  
  const tenantName = faker.company.companyName();
  const setting = new TenantSetting();
  setting.Hour24Time = true;
  setting.language = 'en-us';

  const domain = new TenantDomain();
  domain.address = tenantName.replace(' ', '').toLowerCase() + '.net';
  domain.default = true;

  const navigation = new TenantNavigation();
  navigation.mapType = 'google';
  navigation.zoom = 7;
  navigation.zoomSelection = 15;
  navigation.mapCenter = { type: 'Point', coordinates: [0, 0] };

  const tenant = new Tenant();
  tenant.active = true;
  tenant.name = tenantName;
  tenant.shortName = tenantName.split(' ').shift();
  tenant.setting = setting;
  tenant.navigation = navigation;
  tenant.domains = [domain];
  

  return tenant;

});
*/
