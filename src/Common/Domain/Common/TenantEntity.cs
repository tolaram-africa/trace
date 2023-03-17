using Trace.Common.Domain.Modules.Tenant.Entities;

namespace Trace.Common.Domain.Common;

public abstract class TenantEntity<TKey> : AuditableEntity<TKey>, ITenant {
    public Guid? TenantId { get; set; }
    public Tenant Tenant { get; set; } = null!;
}