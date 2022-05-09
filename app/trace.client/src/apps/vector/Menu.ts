import paths from './paths';
import {
  IModule,
  filterMobileMenu,
  filterExtendedMenu,
  IModuleCommands,
  filterModule,
} from '@/libs/Menu';

export const mainModules: Array<IModule> = [
  paths.overview.root,
  paths.task.root,
  paths.track.root,
  paths.billing.root,
  paths.shortage.root,
  paths.payment.root,
  paths.driver.root,
  paths.resource.root,
];

const desktopFocusMenuItems = [paths.overview.root.name, paths.task.root.name];
const mobileFocusMenuItems = [
  paths.overview.root.name,
  paths.task.root.name,
  paths.track.root.name,
];

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
  paths.task.taskCreate,
  paths.billing.billingDocumentCreate,
  paths.task.taskEventCreate,
  paths.resource.resourceLocationCreate,
  paths.resource.resourceRouteCreate,
];
