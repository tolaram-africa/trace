import { RouteRecordRaw } from 'vue-router';
import { catchAllRoute, rootRoute } from 'src/app/routes';
import VectorAppRoutes from 'src/apps/vector/routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () =>
      import('src/shared/layouts/components/LoadingIndicator.vue'),
    children: [
      /** Root path */
      rootRoute,
      {
        path: 'app',
        component: () => import('src/shared/components/Empty.vue'),
        children: [VectorAppRoutes],
      },
      /** Catch all path */
      catchAllRoute,
    ],
  },
];

export default routes;
