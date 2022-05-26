import vectorPaths from '@/libs/paths';

export default {
  path: vectorPaths.account.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.account.root.name,
      redirect: { name: vectorPaths.account.profile.name },
    },
    {
      path: vectorPaths.account.profile.path,
      name: vectorPaths.account.profile.name,
      component: () => import('./pages/ProfilePage.vue'),
    },
    {
      path: vectorPaths.account.settings.path,
      name: vectorPaths.account.settings.name,
      component: () => import('./pages/SettingsPage.vue'),
    },
    {
      path: vectorPaths.account.passwordReset.path,
      name: vectorPaths.account.passwordReset.name,
      component: () => import('./pages/PasswordPage.vue'),
    },
  ],
};
