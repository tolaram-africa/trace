namespace Trace.Common.Domain.Modules.Tag.Entities;

public class Tag : TypeEntity<Guid> {
    public string Color { get; set; } = String.Empty;
}