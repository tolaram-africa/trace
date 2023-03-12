import vectorPaths from '@/vector/paths';

export default {
  path: vectorPaths.payment.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.payment.root.name,
      redirect: { name: vectorPaths.payment.summary.name },
    },
    {
      path: vectorPaths.payment.summary.path,
      name: vectorPaths.payment.summary.name,
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: vectorPaths.payment.history.path,
      name: vectorPaths.payment.history.name,
      component: () => import('./pages/HistoryPage.vue'),
    },
  ],
};
