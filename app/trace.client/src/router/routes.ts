import { RouteRecordRaw } from 'vue-router';
import { catchAllRoute, rootRoute } from 'src/app/routes';
import VectorAppRoutes from '@/vector/routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/components/LoadingIndicator.vue'),
    children: [
      /** Root path */
      rootRoute,
      {
        path: 'app',
        component: () => import('@/components/Empty.vue'),
        children: [VectorAppRoutes],
      },
      /** Catch all path */
      catchAllRoute,
    ],
  },
];

export default routes;
