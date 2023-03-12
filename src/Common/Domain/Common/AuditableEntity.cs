namespace Trace.Common.Domain.Common;

public class AuditableEntity {
    public Guid? CreatedBy { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public Guid? UpdatedBy { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public Guid? DeletedBy { get; set; }
    public DateTime? DeletedAt { get; set; }
}