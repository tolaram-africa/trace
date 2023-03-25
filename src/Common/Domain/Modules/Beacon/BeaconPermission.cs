using Trace.Common.Domain.Permission;

namespace Trace.Common.Domain.Modules.Beacon;

public class BeaconPermission : IPermission {
    private const string Id = "beacon";
    private const RoleLevel Role = RoleLevel.Default;
    private const Module DefaultModule = Module.Beacon;
    public IEnumerable<PermissionItem> Result() => new List<PermissionItem> {
        new PermissionItem(DefaultModule, $"{Id}.overview", Role, new []{ true, false, false, false })
    };
}