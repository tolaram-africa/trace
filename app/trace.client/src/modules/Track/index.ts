export default {
  path: 'track',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'track',
      redirect: { name: 'track.monitor' },
    },
    {
      path: 'monitor',
      name: 'track.monitor',
      component: () => import('./pages/MonitorPage.vue'),
    },
    {
      path: 'monitor/id/:id',
      name: 'track.monitor.id',
      component: () => import('./pages/InstacePage.vue'),
    },
    {
      path: 'objects',
      name: 'track.objects',
      component: () => import('./pages/ObjectPage.vue'),
    },
  ],
};
