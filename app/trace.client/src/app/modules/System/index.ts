import SharedPaths from '@/libs/paths';

// TODO: Remove temporary redirection to first module
export const rootRoute = {
  path: '',
  name: SharedPaths.root.name,
  redirect: { name: SharedPaths.root.redirect },
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
