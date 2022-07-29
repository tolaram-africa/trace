import { RouteRecordRaw } from 'vue-router';
import { catchAllRoute, rootRoute } from 'src/app/routes';
import VectorAppRoutes from '@/vector/routes';
import TrackAppRoutes from '@/direct/routes';
import EasyAppRoutes from '@/easy/routes';
import ManagerAppRoutes from '@/manager/routes';

type IVariant = 'easy' | 'manager' | 'track' | 'vector';

enum Variant {
  EASY = 'easy',
  MANAGER = 'manager',
  TRACK = 'track',
  VECTOR = 'vector',
}

const selectedApp: IVariant =
  (process.env.APP_VARIANT as IVariant) || Variant.VECTOR;

const getCurrentApp = (app: IVariant): RouteRecordRaw => {
  switch (app) {
    case Variant.VECTOR:
      return VectorAppRoutes;
    case Variant.TRACK:
      return TrackAppRoutes;
    case Variant.EASY:
      return EasyAppRoutes;
    case Variant.MANAGER:
      return ManagerAppRoutes;
    default:
      return TrackAppRoutes;
  }
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/components/LoadingIndicator.vue'),
    children: [
      /** Root path */
      rootRoute,
      /** App inject */
      getCurrentApp(selectedApp),
      /** Catch all path */
      catchAllRoute,
    ],
  },
];

export default routes;
