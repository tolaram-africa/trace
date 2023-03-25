using Trace.Common.Domain.Permission;

namespace Trace.Common.Domain.Modules.Asset;

public class AssetPermission : IPermission {
    private const string Id = "asset";
    private const RoleLevel Role = RoleLevel.Default;
    private const Module DefaultModule = Module.Asset;
    public IEnumerable<PermissionItem> Result() => new List<PermissionItem> {
        new PermissionItem(DefaultModule, $"{Id}.overview", Role, new []{ true, false, false, false })
    };
}