export const rootRoute = {
  path: '',
  name: 'root',
  // TODO: Temporarily redirect to the first module
  redirect: { name: 'overview.dashboard' },
  component: () => import('./pages/RootPage.vue'),
};

export const NotificationRoute = {
  path: 'notifications',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'notifications',
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
      name: 'error',
      component: () => import('./pages/ErrorPage.vue'),
    },
  ],
};
