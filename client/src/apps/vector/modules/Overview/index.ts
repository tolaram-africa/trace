import vectorPaths from '@/vector/paths';

export default {
  path: vectorPaths.overview.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.overview.root.name,
      redirect: { name: vectorPaths.overview.dashboard.name },
    },
    {
      path: vectorPaths.overview.dashboard.path,
      name: vectorPaths.overview.dashboard.name,
      component: () => import('./pages/DashboardPage.vue'),
    },
    {
      path: vectorPaths.overview.trends.path,
      name: vectorPaths.overview.trends.name,
      component: () => import('./pages/TrendPage.vue'),
    },
  ],
};
