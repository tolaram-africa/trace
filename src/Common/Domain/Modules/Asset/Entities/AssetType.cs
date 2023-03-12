using Trace.Common.Domain.Common;

namespace Trace.Common.Domain.Modules.Asset.Entities;

/// <inheritdoc />
public sealed class AssetType : TypeEntity<Guid> {
    public string? Color { get; set; }
}