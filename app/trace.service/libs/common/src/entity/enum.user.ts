export enum AuthProvider {
  GOOGLE = 'goggle',
  MICROSOFT = 'microsoft',
  LOCAL = 'local',
}

export enum SystemLevel {
  BOT = 'bot',
  CLIENT = 'client',
  CUSTOMER = 'customer',
  TENANT = 'tenant',
  SYSTEM = 'system',
}

export enum RoleType {
  /** Block in tenant service */
  BOT = 'bot',
  SYSTEM = 'system',
  /** Customer Accounts */
  CLIENT = 'client',
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
  TENANT_LOADER = 'tenant.loader',
  TENANT_DRIVER = 'tenant.driver',
}

export enum SystemRole {
  /** Overlords account types */
  BOT = 'bot',
  SUPER_ADMIN = 'system.super-admin',
  ADMIN = 'system.admin',
  OPERATOR = 'system.operator',
}

export enum PermissionOption {
  READ = 'read',
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}
