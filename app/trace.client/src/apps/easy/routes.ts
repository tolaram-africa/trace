import AccountRoutes from '@/app/modules/Account';
import IdentityRoutes from '@/app/modules/Identity';
import { NotificationRoute } from '@/app/modules/System';

const APP_NAME = 'easy';
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
      children: [...SharedRoutes],
    },
  ],
};
