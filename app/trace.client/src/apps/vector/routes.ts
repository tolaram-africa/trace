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

const appRoutes = [AccountRoutes, NotificationRoute];

export default {
  path: 'vector',
  name: 'vec',
  component: () => import('./App.vue'),
  children: [
    IdentityRoutes,
    {
      path: 'm',
      component: () => import('./shared/layouts/AppLayout.vue'),
      children: [
        ...appRoutes,
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
