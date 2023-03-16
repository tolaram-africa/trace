using Trace.Common.Domain.Modules.Tenant.Entities;

namespace Trace.Common.Domain.Interfaces;

public interface ITenant {
    public Guid? TenantId { get; set; }

    public Tenant Tenant { get; set; }
}