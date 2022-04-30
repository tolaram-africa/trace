export default {
  path: 'driver',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'driver',
      redirect: { name: 'driver.summary' },
    },
    {
      path: 'summary',
      name: 'driver.summary',
      component: () => import('./pages/SummaryPage.vue'),
    },
    {
      path: 'trips',
      name: 'driver.trips',
      component: () => import('./pages/TripsPage.vue'),
    },
  ],
};
