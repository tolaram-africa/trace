import vectorPaths from '@/vector/paths';

export default {
  path: vectorPaths.track.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.track.root.name,
      redirect: { name: vectorPaths.track.monitor.name },
    },
    {
      path: vectorPaths.track.monitor.path,
      name: vectorPaths.track.monitor.name,
      component: () => import('./pages/Monitor/IndexPage.vue'),
    },
    {
      path: vectorPaths.track.monitorId.path,
      name: vectorPaths.track.monitorId.name,
      component: () => import('./pages/InstacePage.vue'),
    },
    {
      path: vectorPaths.track.objects.name,
      name: vectorPaths.track.objects.path,
      component: () => import('./pages/ObjectPage.vue'),
    },
  ],
};
