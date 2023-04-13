import {
  IModule,
  filterMobileMenu,
  filterExtendedMenu,
  IModuleCommands,
  filterModule,
} from '@/libs/Menu';

export const mainModules: Array<IModule> = [
  {
    title: 'Overview',
    name: 'vec.overview',
    icon: 'bi-grid',
    path: 'overview',
  },
  {
    name: 'vec.task',
    title: 'Task',
    icon: 'bi-list-check',
    path: 'task',
  },
  {
    name: 'vec.track',
    title: 'Track',
    icon: 'bi-pin-map',
    path: 'track',
  },
  {
    title: 'Billing',
    icon: 'bi-upc-scan',
    name: 'vec.billing',
    path: 'billing',
  },
  {
    title: 'Shortage',
    icon: 'bi-exclamation-square',
    name: 'vec.shortage',
    path: 'shortage',
  },
  {
    title: 'Payments',
    icon: 'bi-cash-stack',
    name: 'vec.payment',
    path: 'payment',
  },
  {
    title: 'Drivers',
    icon: 'bi-person-workspace',
    name: 'vec.driver',
    path: 'driver',
  },
  {
    title: 'Resources',
    icon: 'bi-hdd-stack',
    name: 'vec.resource',
    path: 'resource',
  },
];

const desktopFocusMenuItems = ['vec.overview', 'vec.task'];
const mobileFocusMenuItems = ['vec.overview', 'vec.task', 'vec.track'];

export const overviewMenu: Array<IModule> = filterModule(
  mainModules,
  desktopFocusMenuItems
);

export const appModuleMenu: Array<IModule> = filterModule(
  mainModules,
  desktopFocusMenuItems,
  false
);

export const appMobileMenu = filterMobileMenu(
  mainModules,
  mobileFocusMenuItems
);

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
    path: 'document-create',
    command: 'D',
  },
  {
    name: 'vec.task.event.create',
    title: 'Event',
    icon: 'bi-calendar2',
    command: 'H',
  },
  {
    name: 'vec.resource.location.create',
    title: 'Location',
    icon: 'bi-geo-alt',
    command: 'L',
  },
  {
    name: 'vec.resource.route.create',
    title: 'Route',
    icon: 'bi-compass',
    command: 'R',
  },
];
