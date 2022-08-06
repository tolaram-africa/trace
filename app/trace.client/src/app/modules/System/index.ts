import SharedPaths from '@/libs/paths';

// TODO: Use auth check and conditional redirection later
export const rootRoute = {
  path: '',
  name: SharedPaths.root.name,
  component: () => import('./pages/RootPage.vue'),
};

export const NotificationRoute = {
  path: SharedPaths.notification.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: SharedPaths.notification.root.name,
      component: () => import('./pages/NotificationPage.vue'),
    },
    {
      path: SharedPaths.notification.view.path,
      name: SharedPaths.notification.view.name,
      component: () => import('./pages/NotificationPage.vue'),
    },
  ],
};

export const catchAllRoute = {
  path: ':catchAll(.*)*',
  name: 'app.error',
  component: () => import('./pages/ErrorPage.vue'),
};
