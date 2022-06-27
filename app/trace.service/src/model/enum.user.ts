export enum AuthProvider {
  GOOGLE = 'goggle',
  MICROSOFT = 'microsoft',
  LOCAL = 'local',
}

export enum UserAccountType {
  CUSTOMER_CLIENT = 'customer-client',
  CUSTOMER = 'customer',
  TENANT = 'tenant',
  SYSTEM = 'system',
}

export enum UserType {
  /** All users */
  ALL = 'all',
  /** Block in tenant service */
  OVERLORD = 'overlord',
  /** Customer Accounts */
  CUSTOMER_CLIENT = 'customer.client',
  CUSTOMER_OPERATOR = 'customer.operator',
  CUSTOMER_ADMIN = 'customer.admin',
  CUSTOMER_LOADER = 'customer.loader',
  /** Tenant Accounts */
  TENANT_SUPER_ADMIN = 'tenant.admin.super',
  TENANT_ADMIN = 'tenant.admin',
  TENANT_FLEET_LEAD = 'tenant.fleet-lead',
  TENANT_FLEET_MEMBER = 'tenant.fleet-member',
  TENANT_FLEET_MANAGER = 'tenant.fleet-manager',
  TENANT_WAREHOUSE_MANAGER = 'tenant.warehouse',
  TENANT_DRIVER_MANAGER = 'tenant.driver-manager',
  TENANT_DRIVER_SUPERVISOR = 'tenant.driver-supervisor',
}

export enum SystemUserType {
  /** All users */
  ALL = 'all',
  /** Overloads account types */
  SUPER_ADMIN = 'system.super-admin',
  ADMIN = 'system.admin',
  OPERATOR = 'system.operator',
}

export enum RBACPermission {
  ALL = 'all',
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
}
