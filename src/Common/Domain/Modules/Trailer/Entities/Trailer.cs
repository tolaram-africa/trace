using Trace.Common.Domain.Modules.Asset.Shared;

namespace Trace.Common.Domain.Modules.Trailer.Entities;

public sealed class Trailer : AssetEntity {
    public TrailerType Type { get; set; } = null!;

    public string FleetIdentifier { get; set; } = String.Empty;

    public long Odometer { get; set; }

    public int HorsePower { get; set; }

    public string Model { get; set; } = null!;

    public decimal WeightCapacity { get; set; }

    public decimal AxleWeightCapacity { get; set; }
}