import vectorPaths from '@/vector/paths';
import InvoiceModule from '@/vector/modules/Invoice';

export default {
  path: vectorPaths.billing.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.billing.root.name,
      redirect: { name: vectorPaths.billing.recent.name },
    },
    {
      path: vectorPaths.billing.recent.path,
      name: vectorPaths.billing.recent.name,
      component: () => import('./pages/RecentPage.vue'),
    },
    {
      path: vectorPaths.billing.watchList.path,
      name: vectorPaths.billing.watchList.name,
      component: () => import('./pages/WatchListPage.vue'),
    },
    InvoiceModule,
  ],
};
