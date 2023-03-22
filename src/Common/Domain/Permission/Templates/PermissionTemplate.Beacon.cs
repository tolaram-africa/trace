using Trace.Common.Domain.Permission.Enums;

namespace Trace.Common.Domain.Permission.Templates;

public class BeaconPermissionTemplate : IPermissionTemplate {
    private const string Id = "beacon";
    public IEnumerable<PermissionItem> Result() => new List<PermissionItem> {
        new PermissionItem(ModuleItem.Beacon, $"{Id}.overview", new []{ true, false, false, false })
    };
}