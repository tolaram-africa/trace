export default {
  path: 'payment',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'payment',
      redirect: { name: 'payment.summary' },
    },
    {
      path: 'summary',
      name: 'payment.summary',
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: 'history',
      name: 'payment.history',
      component: () => import('./pages/HistoryPage.vue'),
    },
  ],
};
