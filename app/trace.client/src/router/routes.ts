import { RouteRecordRaw } from 'vue-router';
import AdministrationRoutes from 'src/modules/Administration';
import BillingRoutes from 'src/modules/Billing';
import DriverRoutes from 'src/modules/Driver';
import InvoiceRoutes from 'src/modules/Invoice';
import OverviewRoutes from 'src/modules/Overview';
import TaskRoutes from 'src/modules/Task';
import PaymentRoutes from 'src/modules/Payment';
import ResourceRoutes from 'src/modules/Resource';
import ShipmentRoutes from 'src/modules/Shipment';
import ShortageRoutes from 'src/modules/Shortage';
import TrackRoutes from 'src/modules/Track';

// TODO: New apps based routes
import { catchAllRoute, rootRoute } from 'src/app/routes';
import VectorAppRoutes from 'src/apps/vector/routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () =>
      import('src/shared/layouts/components/LoadingIndicator.vue'),
    children: [
      /** System root path */
      rootRoute,
      {
        path: 'app',
        component: () => import('src/shared/components/Empty.vue'),
        children: [VectorAppRoutes],
      },

      // TODO: Delete this
      {
        path: 'module',
        component: () => import('src/shared/layouts/MainLayout.vue'),
        children: [
          /** Root module path redirect */
          { path: '', redirect: { name: 'root' } },
          AdministrationRoutes,
          BillingRoutes,
          DriverRoutes,
          InvoiceRoutes,
          OverviewRoutes,
          TaskRoutes,
          TrackRoutes,
          PaymentRoutes,
          ResourceRoutes,
          ShipmentRoutes,
          ShortageRoutes,
        ],
      },
      /** System catch all path */
      catchAllRoute,
    ],
  },
];

export default routes;
