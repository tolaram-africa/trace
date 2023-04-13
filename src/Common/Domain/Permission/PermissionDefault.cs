using Proton.Common.Standard.Helpers;
using Trace.Common.Standard;

namespace Trace.Common.Domain.Permission;

public class PermissionDefault {
    public static IEnumerable<PermissionItem> Result() =>
        FactoryLoader.LoadClassInstances<IPermission>().SelectMany(template => template.Result()).ToList();
}