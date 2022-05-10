export interface IModule {
  name: string;
  title: string;
  icon: string;
  color?: string;
  class?: string;
}

export interface IModuleCommands extends IModule {
  command: string;
}

export const identityMenu: Array<IModule> = [
  { title: 'Account', icon: 'bi-person', name: 'account.profile' },
  {
    title: 'Settings',
    icon: 'bi-gear-wide-connected',
    name: 'account.settings',
  },
  { title: 'Admin Space', icon: 'bi-nut', name: 'administration' },
  { title: 'Help', icon: 'bi-question-circle', name: 'help' },
];

export const notificationMenu: Array<IModule> = [
  {
    name: '0',
    icon: '',
    title: 'View All',
  },
  {
    name: '1',
    icon: '',
    title: 'Task',
  },
  {
    name: '2',
    icon: '',
    title: 'Unread',
  },
];

export const sampleRootApps: Array<IModule> = [
  {
    name: 'vec.overview',
    title: 'Vector',
    icon: 'bi-signpost-2',
  },
  {
    name: 'vec.track',
    title: 'Direct',
    icon: 'bi-compass',
  },
  {
    name: 'vec.task',
    title: 'Manager',
    icon: 'bi-sliders',
  },
];

export const filterModule = (
  items: Array<IModule>,
  filter: Array<string>,
  include = true
): Array<IModule> => {
  return items.filter((e) => {
    const addOrRemove = filter.includes(e.name);
    return include ? addOrRemove : !addOrRemove;
  });
};

export const filterMobileMenu = (
  items: Array<IModule>,
  includedItems: Array<string> = []
): Array<IModule> => {
  const mobileMenu: Array<IModule> = items.filter((e) => {
    return includedItems.includes(e.name);
  });
  mobileMenu.push({
    name: 'app.notifications',
    title: 'Notifications',
    icon: 'bi-bell',
  });
  return mobileMenu;
};

export const filterExtendedMenu = (
  items: Array<IModule>,
  excludedItems: Array<IModule> = []
): Array<IModule> => {
  return items
    .filter((e) => {
      return !excludedItems.map((k) => k.name).includes(e.name);
    })
    .map((e) => {
      e.color = 'primary';
      e.class = 'app-menu-item';
      return e;
    });
};
