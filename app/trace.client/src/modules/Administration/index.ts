export default {
  path: 'administration',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'administration',
      redirect: { name: 'administration.users' },
    },
    {
      path: 'users',
      name: 'administration.users',
      component: () => import('./pages/UsersPage.vue'),
    },
    {
      path: 'settings',
      name: 'administration.settings',
      component: () => import('./pages/SettingsPage.vue'),
    },
  ],
};
