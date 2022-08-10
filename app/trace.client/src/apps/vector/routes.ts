import IdentityRoutes from '@/app/modules/Identity';
import BillingModule from './modules/Billing';
import DriverModule from './modules/Driver';
import OverviewModule from './modules/Overview';
import TaskModule from './modules/Task';
import PaymentModule from './modules/Payment';
import ResourceModule from './modules/Resource';
import SettingsModule from './modules/Settings';
import ShortageModule from './modules/Shortage';
import TrackModule from './modules/Track';
import { SharedBaseRoutes } from '@/app/modules';

const APP_NAME = 'vec';
const MODULE_ROOT = 'm';

export default {
  path: '',
  name: APP_NAME,
  component: () => import('./App.vue'),
  children: [
    IdentityRoutes,
    {
      path: MODULE_ROOT,
      component: () => import('./shared/layouts/AppLayout.vue'),
      children: [
        ...SharedBaseRoutes,
        BillingModule,
        DriverModule,
        OverviewModule,
        TaskModule,
        PaymentModule,
        ResourceModule,
        SettingsModule,
        ShortageModule,
        TrackModule,
      ],
    },
  ],
};
