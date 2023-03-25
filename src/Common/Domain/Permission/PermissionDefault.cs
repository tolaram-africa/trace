using Trace.Common.Standard;

namespace Trace.Common.Domain.Permission;

public class PermissionDefault {
    public static IEnumerable<PermissionItem> Result() =>
        FactoryLoader.Load<IPermission>().SelectMany(template => template.Result()).ToList();
}