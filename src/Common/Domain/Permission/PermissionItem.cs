using Trace.Common.Domain.Permission.Enums;

namespace Trace.Common.Domain.Permission;

public class PermissionItem {
    public PermissionItem(ModuleItem module, string featureId, bool[] actions) {
        this.Module = module;
        this.FeatureId = featureId;
        this.Actions = actions;
    }
    
    public ModuleItem Module { get; init; }
    public string FeatureId { get; init; }
    // Read, Create, Update, Delete
    public bool[] Actions { get; init; }
}