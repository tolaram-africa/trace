namespace Trace.Common.Domain.Common;

public abstract class TypeEntity<TKey> : TenantEntity<TKey> {
    public bool Default { get; set; }

    public string Name { get; set; } = String.Empty;

    public string? Description { get; set; }
}