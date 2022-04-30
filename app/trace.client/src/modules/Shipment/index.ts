export default {
  path: 'shipment',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'shipment',
      redirect: { name: 'shipment.monitor' },
    },
    {
      path: 'monitor',
      name: 'shipment.monitor',
      component: () => import('./pages/MonitorPage.vue'),
    },
    {
      path: 'summary',
      name: 'shipment.summery',
      component: () => import('./pages/SummaryPage.vue'),
    },
  ],
};
