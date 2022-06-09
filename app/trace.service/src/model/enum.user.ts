export enum UserAccessType {
  CUSTOMER = 'customer',
  FLEET = 'fleet',
  TENANT = 'tenant',
}

export enum AuthProvider {
  GOOGLE = 'goggle',
  MICROSOFT = 'microsoft',
  OAUTH = 'oauth',
}

export enum UserAccountType {
  CUSTOMER_SUB,
  CUSTOMER,
  FLEET,
  TENANT,
}

export enum UserType {
  ALL = 'all',
  /** Customer */
  CUSTOMER_USER = 'customer.user',
  CUSTOMER_SUB = 'customer.sub_account',
  CUSTOMER_ADMIN = 'customer.admin',
  CUSTOMER_SUPERVISOR = 'customer.supervisor',
  /** Tenant */
  FLEET_SUPER_ADMIN = 'fleet.admin.super',
  FLEET_ADMIN = 'fleet.admin',
  FLEET_MANAGER = 'fleet.manager',
  FLEET_TEAM_LEAD = 'fleet.team.lead',
  FLEET_TEAM_MEMBER = 'fleet.team.member',
  FLEET_WAREHOUSE_MANAGER = 'fleet.warehouse',
  FLEET_BAY_SUPERVISOR = 'fleet.bay_supervisor',
  FLEET_DRIVER_MANAGER = 'fleet.driver.manager',
  FLEET_DRIVER_SUPERVISOR = 'fleet.driver.supervisor',
  /** Tenant Managers */
  TENANT_SUPER_ADMIN = 'tenant.admin.super',
  TENANT_ADMIN = 'tenant.admin',
  TENANT_OPERATOR = 'tenant.operator',
}
