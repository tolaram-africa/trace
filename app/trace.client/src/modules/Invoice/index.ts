export default {
  path: 'invoice',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'invoice',
      redirect: { name: 'invoice.recent' },
    },
    {
      path: 'recent',
      name: 'invoice.recent',
      component: () => import('./pages/RecentPage.vue'),
    },
    {
      path: 'history',
      name: 'invoice.history',
      component: () => import('./pages/HistoryPage.vue'),
    },
  ],
};
