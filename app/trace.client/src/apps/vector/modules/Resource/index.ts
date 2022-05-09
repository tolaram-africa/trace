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
  ],
};
