using Trace.Common.Domain.Permission.Enums;

namespace Trace.Common.Domain.Permission.Templates;

public class AssetPermissionTemplate : IPermissionTemplate {
    private const string Id = "asset";
    
    public IEnumerable<PermissionItem> Result() => new List<PermissionItem> {
        new PermissionItem(ModuleItem.Asset, $"{Id}.overview", new []{ true, false, false, false })
    };
}