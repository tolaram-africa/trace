using System.ComponentModel.DataAnnotations;
using Trace.Common.Domain.Interfaces;

namespace Trace.Common.Domain.Common;

public abstract class BaseEntity<TKey> : CoreEntity<TKey> {
    public string Attributes { get; set; } = null!;
}