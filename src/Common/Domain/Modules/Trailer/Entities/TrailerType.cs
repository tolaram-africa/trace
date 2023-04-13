namespace Trace.Common.Domain.Modules.Trailer.Entities;

public sealed class TrailerType : TenantEntity<Guid> {
    public decimal Capacity { get; set; }

    public string? Color { get; set; }
}