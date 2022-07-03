export * from './base.auth.entity';
export * from './base.permission.entity';
export * from './user.alerts.entity';
export * from './user.auth.entity';
export * from './user.bank-card.entity';
export * from './user.entity';
export * from './user.passport.entity';
export * from './user.permission.entity';
export * from './user.profile.entity';
export * from './user.role.entity';
export * from './user.setting.entity';

import {
  UserProfile,
  UserRole,
  UserPassport,
  UserSetting,
  UserAlert,
  UserPermission,
  BankCard,
} from './';

export const UserModuleEntity = [
  UserProfile,
  UserRole,
  UserPassport,
  UserSetting,
  UserAlert,
  UserPermission,
  BankCard,
];
