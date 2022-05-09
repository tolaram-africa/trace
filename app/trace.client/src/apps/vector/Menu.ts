import {
  IModule,
  filterMobileMenu,
  filterExtendedMenu,
  IModuleCommands,
} from '@/libs/Menu';

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
  { title: 'Resources', icon: 'bi-hdd-stack', name: 'vec.resource' },
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
  appMobileMenu
);

export const quickNewItems: Array<IModuleCommands> = [
  {
    name: 'vec.task.create',
    title: 'Task',
    icon: 'bi-check-circle',
    command: 'T',
  },
  {
    name: 'vec.billing.document.create',
    title: 'Document',
    icon: 'bi-file-earmark-text',
    command: 'D',
  },
  {
    name: 'vec.task.event.create',
    title: 'Event',
    icon: 'bi-calendar2',
    command: 'H',
  },
  {
    name: 'vec.location.create',
    title: 'Location',
    icon: 'bi-geo-alt',
    command: 'L',
  },
  {
    name: 'vec.location.route.create',
    title: 'Route',
    icon: 'bi-compass',
    command: 'R',
  },
];
