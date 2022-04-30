export default {
  path: 'overview',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'overview',
      redirect: { name: 'overview.dashboard' },
    },
    {
      path: 'dashboard',
      name: 'overview.dashboard',
      component: () => import('./pages/DashboardPage.vue'),
    },
    {
      path: 'trends',
      name: 'overview.trends',
      component: () => import('./pages/TrendPage.vue'),
    },
  ],
};
