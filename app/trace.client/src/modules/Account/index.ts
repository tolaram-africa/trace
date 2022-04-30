export default {
  path: 'account',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'account',
      redirect: { name: 'account.profile' },
    },
    {
      path: 'profile',
      name: 'account.profile',
      component: () => import('./pages/ProfilePage.vue'),
    },
    {
      path: 'settings',
      name: 'account.settings',
      component: () => import('./pages/SettingsPage.vue'),
    },
    {
      path: 'reset-password',
      name: 'account.password',
      component: () => import('./pages/PasswordPage.vue'),
    },
  ],
};
