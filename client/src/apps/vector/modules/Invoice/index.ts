import vectorPaths from '@/vector/paths';

export default {
  path: vectorPaths.invoice.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.invoice.root.name,
      redirect: { name: vectorPaths.invoice.recent.name },
    },
    {
      path: vectorPaths.invoice.recent.path,
      name: vectorPaths.invoice.recent.name,
      component: () => import('./pages/RecentPage.vue'),
    },
    {
      path: vectorPaths.invoice.history.path,
      name: vectorPaths.invoice.history.name,
      component: () => import('./pages/HistoryPage.vue'),
    },
  ],
};
