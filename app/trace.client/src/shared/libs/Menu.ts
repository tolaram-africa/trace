export interface IMenu {
  name: string;
  title: string;
  icon: string;
  color?: string;
  class?: string;
}

export const identityMenu: Array<IMenu> = [
  { title: 'Account', icon: 'bi-person', name: 'account.profile' },
  {
    title: 'Settings',
    icon: 'bi-gear-wide-connected',
    name: 'account.settings',
  },
  { title: 'Admin Space', icon: 'bi-nut', name: 'administration' },
  { title: 'Resources', icon: 'bi-hdd-stack', name: 'resource' },
  { title: 'Help', icon: 'bi-question-circle', name: 'help' },
];

export const mobileMenu = (
  items: Array<IMenu>,
  includedItems: Array<string>
): Array<IMenu> => {
  const mobileMenu: Array<IMenu> = items.filter((e) => {
    return includedItems.includes(e.name);
  });
  mobileMenu.push({
    name: 'app.notifications',
    title: 'Notifications',
    icon: 'bi-bell',
  });
  return mobileMenu;
};

export const mobileMenuExtended = (
  items: Array<IMenu>,
  excludedItems: Array<IMenu>
): Array<IMenu> => {
  const focusMenu = excludedItems.map((k) => k.name);

  return items
    .filter((e) => {
      return !focusMenu.includes(e.name);
    })
    .map((e) => {
      e.color = 'primary';
      e.class = 'app-menu-item';
      return e;
    });
};
