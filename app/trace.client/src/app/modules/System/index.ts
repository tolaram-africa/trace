import vectorPaths from '@/libs/paths';

// TODO: Temporarily redirect to the first module
export const rootRoute = {
  path: '',
  name: vectorPaths.root.name,
  redirect: { name: vectorPaths.root.redirect },
  component: () => import('./pages/RootPage.vue'),
};

export const NotificationRoute = {
  path: vectorPaths.notification.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.notification.root.name,
      component: () => import('./pages/NotificationPage.vue'),
    },
    {
      path: vectorPaths.notification.view.path,
      name: vectorPaths.notification.view.name,
      component: () => import('./pages/NotificationPage.vue'),
    },
  ],
};

export const catchAllRoute = {
  path: ':catchAll(.*)*',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'app.error',
      component: () => import('./pages/ErrorPage.vue'),
    },
  ],
};
