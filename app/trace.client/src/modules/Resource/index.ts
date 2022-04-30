export default {
  path: 'resource',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'resource',
      redirect: { name: 'resource.summary' },
    },
    {
      path: 'summary',
      name: 'resource.summary',
      component: () => import('./pages/SummaryPage.vue'),
    },
  ],
};
