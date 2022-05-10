export default {
  // Root
  root: {
    title: 'Root',
    name: 'app.root',
    redirect: 'vec.overview.dashboard',
  },
  // Identity
  identity: {
    root: {
      title: 'Auth',
      icon: 'bi-dash-circle',
      name: 'app.identity',
      path: 'auth',
    },
    signIn: {
      title: 'Sign In',
      icon: 'bi-dash-circle',
      name: 'app.identity.sign-in',
      path: 'sign-in',
    },
    passwordReset: {
      title: 'Password Reset',
      icon: 'bi-dash-circle',
      name: 'app.identity.password-reset',
      path: 'password-reset',
    },
    passwordUpdate: {
      title: 'Password Update',
      icon: 'bi-dash-circle',
      name: 'app.identity.password-update',
      path: 'password-update',
    },
    passwordOtp: {
      title: 'Password OTP',
      icon: 'bi-dash-circle',
      name: 'app.identity.password-otp',
      path: 'password-otp',
    },
    verifyOtp: {
      title: 'Verify OTP',
      icon: 'bi-dash-circle',
      name: 'app.identity.verify-otp',
      path: 'verify-otp',
    },
  },
  // Account
  account: {
    root: {
      title: 'Account',
      icon: 'bi-dash-circle',
      name: 'app.account',
      path: 'account',
    },
    profile: {
      title: 'Profile',
      icon: 'bi-dash-circle',
      name: 'app.account.profile',
      path: 'profile',
    },
    settings: {
      title: 'Settings',
      icon: 'bi-dash-circle',
      name: 'app.account.settings',
      path: 'settings',
    },
    administration: {
      title: 'Admin Space',
      icon: 'bi-dash-circle',
      name: 'app.account.administration',
      path: 'administration',
    },
    passwordReset: {
      title: 'Settings',
      icon: 'bi-dash-circle',
      name: 'app.account.password-reset',
      path: 'password-reset',
    },
  },
  // Notification
  notification: {
    root: {
      title: 'Notification',
      icon: 'bi-bell',
      name: 'app.notifications',
      path: 'notifications',
    },
    view: {
      title: 'Notification',
      icon: 'bi-bell',
      name: 'app.notifications.view',
      path: 'notifications/:id',
    },
  },
};
