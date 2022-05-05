import BillingModule from './modules/Billing';
import DriverModule from './modules/Driver';
import InvoiceModule from './modules/Invoice';
import OverviewModule from './modules/Overview';
import TaskModule from './modules/Task';
import PaymentModule from './modules/Payment';
import ResourceModule from './modules/Resource';
import SettingsModule from './modules/Settings';
import ShortageModule from './modules/Shortage';
import TrackModule from './modules/Track';

export default {
  path: 'vector',
  name: 'vec',
  component: () => import('./App.vue'),
  children: [
    {
      path: 'm',
      component: () => import('./shared/layouts/AppLayout.vue'),
      children: [
        BillingModule,
        DriverModule,
        InvoiceModule,
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
