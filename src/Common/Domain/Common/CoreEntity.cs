using System.ComponentModel.DataAnnotations;

namespace Trace.Common.Domain.Common;

public abstract class CoreEntity<TKey> : IHasKey<TKey> {
    [Key]
    public TKey Id { get; set; } = default!;
}