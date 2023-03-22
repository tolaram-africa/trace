namespace Trace.Common.Domain.Permission.Enums;

public enum UserRoleLevel {
    // System roles
    Anonymous,
    Bot,

    // Customer roles
    Client,
    CustomerBasic,
    CustomerOperator,
    CustomerAdministrator,
    
    // Tenant roles
    TenantDriver,
    TenantLoadSupervisor,
    TenantWarehouseManager,
    TenantDriverSupervisor,
    TenantDriverManager,
    TenantFleetMember,
    TenantFleetLead,
    TenantFleetManager,
    TenantAdministrator,
    TenantSuperAdministrator
}