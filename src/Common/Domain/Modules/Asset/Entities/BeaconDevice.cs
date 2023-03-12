using Trace.Common.Domain.Modules.Asset.Enums;
using Trace.Common.Domain.Modules.Asset.Shared;

namespace Trace.Common.Domain.Modules.Asset.Entities;

public sealed class BeaconDevice : AssetEntity {
    public BeaconDeviceStatus Status { get; set; }

    public string UniqueId { get; set; }

    public DateTime? LastUpdate { get; set; }

    public string Color { get; set; }

    public DateTime? Deployed { get; set; }

    public DateTime? Decommissioned { get; set; }
}