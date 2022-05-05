export default {
  path: 'auth',
  redirect: { name: 'app.identity.sign-in' },
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: 'sign-in',
      name: 'app.identity.sign-in',
      component: () => import('./pages/LoginPage.vue'),
    },
    {
      path: 'password-reset',
      name: 'app.identity.password',
      component: () => import('./pages/PasswordPage.vue'),
    },
    {
      path: 'password-otp',
      name: 'app.identity.password-otp',
      component: () => import('./pages/PasswordOtpPage.vue'),
    },
    {
      path: 'verify-otp',
      name: 'app.identity.verify-otp',
      component: () => import('./pages/VerifyPage.vue'),
    },
  ],
};
