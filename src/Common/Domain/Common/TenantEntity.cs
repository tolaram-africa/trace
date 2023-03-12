using Trace.Common.Domain.Interfaces;

namespace Trace.Common.Domain.Common;

public abstract class TenantEntity<TKey> : BaseEntity<TKey>, ITenant {
    public Guid? TenantId { get; set; }
}