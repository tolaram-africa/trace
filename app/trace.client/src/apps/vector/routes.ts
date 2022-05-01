import BillingRoutes from './modules/Billing';
import DriverRoutes from './modules/Driver';
import InvoiceRoutes from './modules/Invoice';
import OverviewRoutes from './modules/Overview';
import TaskRoutes from './modules/Task';
import PaymentRoutes from './modules/Payment';
import ResourceRoutes from './modules/Resource';
import SettingsRoutes from './modules/Settings';
import ShortageRoutes from './modules/Shortage';
import TrackRoutes from './modules/Track';

export default {
  path: 'vector',
  name: 'vec',
  component: () => import('./App.vue'),
  children: [
    {
      path: 'm',
      component: () => import('src/shared/layouts/MainLayout.vue'),
      children: [
        BillingRoutes,
        DriverRoutes,
        InvoiceRoutes,
        OverviewRoutes,
        TaskRoutes,
        PaymentRoutes,
        ResourceRoutes,
        SettingsRoutes,
        ShortageRoutes,
        TrackRoutes,
      ],
    },
  ],
};
