using Trace.Common.Domain.Modules.Asset.Shared;

namespace Trace.Common.Domain.Modules.Asset.Entities;

public sealed class Asset : AssetEntity {
    public string Name { get; set; } = String.Empty;

    public AssetType Type { get; set; } = null!;
}