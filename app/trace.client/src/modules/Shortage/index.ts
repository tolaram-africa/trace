export default {
  path: 'shortage',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'shortage',
      redirect: { name: 'shortage.summary' },
    },
    {
      path: 'summary',
      name: 'shortage.summary',
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: 'history',
      name: 'shortage.history',
      component: () => import('./pages/HistoryPage.vue'),
    },
  ],
};
