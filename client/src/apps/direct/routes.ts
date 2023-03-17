import AccountRoutes from '@/app/modules/Account';
import { NotificationRoute } from '@/app/modules/System';
import { ServiceVariant } from '@/shared/libs/Service';

const APP_NAME = 'trk';
const MODULE_ROOT = 'm';
const SharedRoutes = [AccountRoutes, NotificationRoute];

export default {
  path: ServiceVariant.DIRECT,
  name: APP_NAME,
  component: () => import('./App.vue'),
  children: [
    {
      path: MODULE_ROOT,
      component: () => import('./shared/layouts/AppLayout.vue'),
      children: [...SharedRoutes],
    },
  ],
};