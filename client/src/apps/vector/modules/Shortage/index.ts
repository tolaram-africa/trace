import vectorPaths from '@/vector/paths';

export default {
  path: vectorPaths.shortage.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.shortage.root.name,
      redirect: { name: vectorPaths.shortage.summary.name },
    },
    {
      path: vectorPaths.shortage.summary.path,
      name: vectorPaths.shortage.summary.name,
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: vectorPaths.shortage.history.path,
      name: vectorPaths.shortage.history.name,
      component: () => import('./pages/HistoryPage.vue'),
    },
  ],
};
