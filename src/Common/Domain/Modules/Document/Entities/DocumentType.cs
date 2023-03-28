namespace Trace.Common.Domain.Modules.Document.Entities;

public class DocumentType : TypeEntity<Guid> {
    public string Icon { get; set; } = String.Empty;

    public string? Feature { get; set; }
}