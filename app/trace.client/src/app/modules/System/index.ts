export const rootRoute = {
  path: '',
  name: 'app.root',
  // TODO: Temporarily redirect to the first module
  redirect: { name: 'vec.overview.dashboard' },
  component: () => import('./pages/RootPage.vue'),
};

export const NotificationRoute = {
  path: 'notifications',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'app.notifications',
      component: () => import('./pages/NotificationPage.vue'),
    },
    {
      path: ':id',
      name: 'app.notifications.item',
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
