import vectorPaths from '@/vector/paths';
import InvoiceModule from '@/vector/modules/Invoice';

export default {
  path: vectorPaths.billing.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.billing.root.name,
      redirect: { name: vectorPaths.billing.summary.name },
    },
    {
      path: vectorPaths.billing.summary.path,
      name: vectorPaths.billing.summary.name,
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: vectorPaths.billing.order.path,
      name: vectorPaths.billing.order.name,
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: vectorPaths.billing.order.name + '.index' },
      children: [
        {
          path: '',
          name: vectorPaths.billing.order.name + '.index',
          component: () => import('./pages/Order/IndexPage.vue'),
        },
      ],
    },
    {
      path: vectorPaths.billing.override.path,
      name: vectorPaths.billing.override.name,
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: vectorPaths.billing.override.name + '.index' },
      children: [
        {
          path: '',
          name: vectorPaths.billing.override.name + '.index',
          component: () => import('./pages/Override/IndexPage.vue'),
        },
      ],
    },
    {
      path: vectorPaths.billing.manifest.path,
      name: vectorPaths.billing.manifest.name,
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: vectorPaths.billing.manifest.name + '.index' },
      children: [
        {
          path: '',
          name: vectorPaths.billing.manifest.name + '.index',
          component: () => import('./pages/Manifest/IndexPage.vue'),
        },
      ],
    },
    /** Invoice routes */
    InvoiceModule,
  ],
};
