using System.ComponentModel.DataAnnotations;
using Trace.Common.Domain.Interfaces;

namespace Trace.Common.Domain.Common;

public abstract class BaseEntity<TKey> : AuditableEntity, IHasKey<TKey> {
    [Key]
    public TKey Id { get; set; } = default!;
    public string Attributes { get; set; } = null!;
}