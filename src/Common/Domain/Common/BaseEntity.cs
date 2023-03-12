using System.ComponentModel.DataAnnotations;

namespace Trace.Common.Domain.Common;

public class BaseEntity<TKey> : AuditableEntity, IHasKey<TKey> {
    [Key]
    public TKey Id { get; set; } = default!;
}