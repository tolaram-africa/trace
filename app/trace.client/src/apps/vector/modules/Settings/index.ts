import vectorPaths from '@/vector/paths';

export default {
  path: vectorPaths.settings.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.settings.root.name,
      redirect: { name: vectorPaths.settings.notification.name },
    },
    {
      path: vectorPaths.settings.notification.path,
      name: vectorPaths.settings.notification.name,
      component: () => import('./pages/NotificationPage.vue'),
    },
    {
      path: vectorPaths.settings.interface.path,
      name: vectorPaths.settings.interface.name,
      component: () => import('./pages/InterfacePage.vue'),
    },
    {
      path: vectorPaths.settings.status.path,
      name: vectorPaths.settings.status.name,
      component: () => import('./pages/StatusPage.vue'),
    },
  ],
};
