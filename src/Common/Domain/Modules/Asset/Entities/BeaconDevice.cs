using Trace.Common.Domain.Modules.Asset.Enums;
using Trace.Common.Domain.Modules.Asset.Shared;

namespace Trace.Common.Domain.Modules.Asset.Entities;

public sealed class BeaconDevice : AssetEntity {
    public BeaconDeviceStatus Status { get; set; }

    public DateTimeOffset? LastUpdate { get; set; }
}