namespace Trace.Common.Domain.Interfaces;

public interface ITenant {
    public Guid? TenantId { get; set; }
}