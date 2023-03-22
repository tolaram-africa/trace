using Trace.Common.Domain.Common;
using Trace.Common.Domain.Modules.Asset.Entities;

namespace Trace.Common.Domain.Modules.Asset.Shared;

public abstract class AssetEntity : TenantEntity<Guid> {
    public string SerialNumber { get; set; } = null!;

    public string Barcode { get; set; } = String.Empty;

    public string UniqueId { get; set; } = String.Empty;

    public string Color { get; set; } = String.Empty;

    public int? YearManufactured { get; set; }

    public DateTimeOffset? Deployed { get; set; }

    public DateTimeOffset? Decommissioned { get; set; }

    // public string? Images { get; set; }

    // public Guid? ManufacturerId { get; set; }

    // public Guid? StockId { get; set; }

    public virtual AssetType AssetType { get; set; } = null!;
}