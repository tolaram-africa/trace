export default {
  path: 'resource',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.resource',
      redirect: { name: 'vec.resource.summary' },
    },
    {
      path: 'summary',
      name: 'vec.resource.summary',
      component: () => import('./pages/SummaryPage.vue'),
    },
  ],
};
