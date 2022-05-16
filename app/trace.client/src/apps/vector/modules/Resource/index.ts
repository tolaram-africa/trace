import vectorPaths from '@/vector/paths';

export default {
  path: vectorPaths.resource.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.resource.root.name,
      redirect: { name: vectorPaths.resource.summary.name },
    },
    {
      path: vectorPaths.resource.summary.path,
      name: vectorPaths.resource.summary.name,
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: vectorPaths.resource.asset.path,
      name: vectorPaths.resource.asset.name,
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: vectorPaths.resource.asset.name + '.index' },
      children: [
        {
          path: '',
          name: vectorPaths.resource.asset.name + '.index',
          component: () => import('./pages/Asset/IndexPage.vue'),
        },
      ],
    },
    {
      path: vectorPaths.resource.expense.path,
      name: vectorPaths.resource.expense.name,
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: vectorPaths.resource.expense.name + '.index' },
      children: [
        {
          path: '',
          name: vectorPaths.resource.expense.name + '.index',
          component: () => import('./pages/Expense/IndexPage.vue'),
        },
      ],
    },
    {
      path: vectorPaths.resource.location.path,
      name: vectorPaths.resource.location.name,
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: vectorPaths.resource.location.name + '.index' },
      children: [
        {
          path: '',
          name: vectorPaths.resource.location.name + '.index',
          component: () => import('./pages/Location/IndexPage.vue'),
        },
      ],
    },
    {
      path: vectorPaths.resource.product.path,
      name: vectorPaths.resource.product.name,
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: vectorPaths.resource.product.name + '.index' },
      children: [
        {
          path: '',
          name: vectorPaths.resource.product.name + '.index',
          component: () => import('./pages/Product/IndexPage.vue'),
        },
      ],
    },
    {
      path: vectorPaths.resource.route.path,
      name: vectorPaths.resource.route.name,
      component: () => import('./pages/LayoutDefault.vue'),
      redirect: { name: vectorPaths.resource.route.name + '.index' },
      children: [
        {
          path: '',
          name: vectorPaths.resource.route.name + '.index',
          component: () => import('./pages/Route/IndexPage.vue'),
        },
      ],
    },
  ],
};
