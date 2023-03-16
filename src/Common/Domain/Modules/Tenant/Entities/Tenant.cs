namespace Trace.Common.Domain.Modules.Tenant.Entities;

public class Tenant : BaseEntity<Guid> {
    public string Name { get; set; } = string.Empty;
}