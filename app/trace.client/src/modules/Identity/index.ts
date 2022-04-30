export default {
  path: 'identity',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'identity',
      redirect: { name: 'identity.sign-in' },
    },
    {
      path: 'sign-in',
      name: 'identity.sign-in',
      // meta: { transition: 'fade' },
      component: () => import('./pages/LoginPage.vue'),
    },
    {
      path: 'password-reset',
      name: 'identity.password',
      component: () => import('./pages/PasswordPage.vue'),
    },
    {
      path: 'password-otp',
      name: 'identity.password-otp',
      component: () => import('./pages/PasswordOtpPage.vue'),
    },
    {
      path: 'verify-otp',
      name: 'identity.verify-otp',
      component: () => import('./pages/VerifyPage.vue'),
    },
  ],
};
