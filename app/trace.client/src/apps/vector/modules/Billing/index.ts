export default {
  path: 'billing',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.billing',
      redirect: { name: 'vec.billing.recent' },
    },
    {
      path: 'recent',
      name: 'vec.billing.recent',
      component: () => import('./pages/RecentPage.vue'),
    },
    {
      path: 'watch-list',
      name: 'vec.billing.watch-list',
      component: () => import('./pages/WatchListPage.vue'),
    },
  ],
};
