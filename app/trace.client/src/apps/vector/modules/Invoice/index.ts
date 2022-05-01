export default {
  path: 'invoice',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.invoice',
      redirect: { name: 'vec.invoice.recent' },
    },
    {
      path: 'recent',
      name: 'vec.invoice.recent',
      component: () => import('./pages/RecentPage.vue'),
    },
    {
      path: 'history',
      name: 'vec.invoice.history',
      component: () => import('./pages/HistoryPage.vue'),
    },
  ],
};
