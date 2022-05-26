import vectorPaths from '@/vector/paths';

export default {
  path: vectorPaths.driver.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.driver.root.name,
      redirect: { name: vectorPaths.driver.summary.name },
    },
    {
      path: vectorPaths.driver.summary.path,
      name: vectorPaths.driver.summary.name,
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: vectorPaths.driver.trips.path,
      name: vectorPaths.driver.trips.name,
      component: () => import('./pages/TripsPage.vue'),
    },
  ],
};
