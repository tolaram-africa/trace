using Trace.Common.Domain.Common;

namespace Trace.Common.Domain.Modules.Asset.Entities;

public sealed class TrailerType : TenantEntity<Guid> {
    public decimal Capacity { get; set; }

    public string? Color { get; set; }
}