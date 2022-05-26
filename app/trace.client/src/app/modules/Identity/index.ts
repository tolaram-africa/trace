import vectorPaths from '@/libs/paths';

export default {
  path: vectorPaths.identity.root.path,
  redirect: { name: vectorPaths.identity.signIn.name },
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: vectorPaths.identity.signIn.path,
      name: vectorPaths.identity.signIn.name,
      component: () => import('./pages/LoginPage.vue'),
    },
    {
      path: vectorPaths.identity.passwordReset.path,
      name: vectorPaths.identity.passwordReset.name,
      component: () => import('./pages/PasswordPage.vue'),
    },
    {
      path: vectorPaths.identity.passwordUpdate.path,
      name: vectorPaths.identity.passwordUpdate.name,
      component: () => import('./pages/PasswordUpdatePage.vue'),
    },
    {
      path: vectorPaths.identity.passwordOtp.path,
      name: vectorPaths.identity.passwordOtp.name,
      component: () => import('./pages/PasswordOtpPage.vue'),
    },
    {
      path: vectorPaths.identity.verifyOtp.path,
      name: vectorPaths.identity.verifyOtp.name,
      component: () => import('./pages/VerifyPage.vue'),
    },
  ],
};
