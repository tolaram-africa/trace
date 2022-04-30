export default {
  path: 'billing',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'billing',
      redirect: { name: 'billing.recent' },
    },
    {
      path: 'recent',
      name: 'billing.recent',
      component: () => import('./pages/RecentPage.vue'),
    },
    {
      path: 'watch-list',
      name: 'billing.watch-list',
      component: () => import('./pages/WatchListPage.vue'),
    },
  ],
};
