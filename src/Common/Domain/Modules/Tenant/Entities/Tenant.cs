using Proton.Common.Entity.Base;
using Trace.Common.Domain.Modules.Tenant.Enum;

namespace Trace.Common.Domain.Modules.Tenant.Entities;

public class Tenant : BaseEntity<Guid> {
    public string Name { get; set; } = string.Empty;

    public string ShortName { get; set; } = string.Empty;

    public TenantType Type { get; set; } = TenantType.Organization;

    public int UniqueId { get; set; }

    public bool Active { get; set; }

    public string Logo { get; set; } = string.Empty;

    public string Background { get; set; } = string.Empty;
}