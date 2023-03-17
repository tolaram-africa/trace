namespace Trace.Common.Domain.Modules.Location.Entities;

public class LocationCategory : TypeEntity<Guid> {
    public string Icon { get; set; } = String.Empty;
}