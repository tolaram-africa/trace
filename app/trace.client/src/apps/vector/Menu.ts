import {
  IModule,
  filterMobileMenu,
  filterExtendedMenu,
} from 'src/shared/libs/Menu';

export const Prefix = 'vec.';

export const Routes = {
  OVERVIEW: Prefix + 'overview',
  TASK: Prefix + 'task',
  TRACK: Prefix + 'track',
  BILLING: Prefix + 'billing',
  SHORTAGE: Prefix + 'shortage',
  PAYMENT: Prefix + 'payment',
  DRIVER: Prefix + 'driver',
};

export const mainModules: Array<IModule> = [
  { title: 'Overview', icon: 'bi-grid', name: Routes.OVERVIEW },
  { title: 'Tasks', icon: 'bi-list-check', name: Routes.TASK },
  { title: 'Tracking', icon: 'bi-pin-map', name: Routes.TRACK },
  { title: 'Billing', icon: 'bi-upc-scan', name: Routes.BILLING },
  {
    title: 'Shortage',
    icon: 'bi-exclamation-square',
    name: Routes.SHORTAGE,
  },
  { title: 'Payments', icon: 'bi-cash-stack', name: Routes.PAYMENT },
  { title: 'Drivers', icon: 'bi-person-workspace', name: Routes.DRIVER },
];

export const overviewMenu: Array<IModule> = mainModules.filter(
  (e) => e.name === Routes.OVERVIEW || e.name === Routes.TASK
);

export const appModuleMenu: Array<IModule> = mainModules.filter(
  (e) => e.name !== Routes.OVERVIEW && e.name !== Routes.TASK
);

export const appMobileMenu = filterMobileMenu(mainModules, [
  Routes.OVERVIEW,
  Routes.TASK,
  Routes.TRACK,
]);

export const appMobileMenuString: Array<string> = appMobileMenu.map(
  (e) => e.name
);

export const appMobileMenuExtended: Array<IModule> = filterExtendedMenu(
  mainModules,
  appModuleMenu
);
