import {
  User,
  UserProfile,
  UserRole,
  UserPassport,
  UserSetting,
  UserAlert,
  UserPermission,
  BankCard,
} from '@/module/user/entity';
import { transformResources } from './util';

const users = [
  User,
  UserProfile,
  UserRole,
  UserPassport,
  UserSetting,
  UserAlert,
  UserPermission,
  BankCard,
];
export const AdminUserModule = transformResources(users, 'Users');
