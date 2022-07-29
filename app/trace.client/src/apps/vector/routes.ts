import AccountRoutes from '@/app/modules/Account';
import IdentityRoutes from '@/app/modules/Identity';
import { NotificationRoute } from '@/app/modules/System';
import BillingModule from './modules/Billing';
import DriverModule from './modules/Driver';
import OverviewModule from './modules/Overview';
import TaskModule from './modules/Task';
import PaymentModule from './modules/Payment';
import ResourceModule from './modules/Resource';
import SettingsModule from './modules/Settings';
import ShortageModule from './modules/Shortage';
import TrackModule from './modules/Track';

const APP_NAME = 'vec';
const MODULE_ROOT = 'm';
const SharedRoutes = [AccountRoutes, NotificationRoute];

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
        ...SharedRoutes,
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
