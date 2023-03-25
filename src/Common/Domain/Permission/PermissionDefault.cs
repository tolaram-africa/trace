using Trace.Common.Standard;

namespace Trace.Common.Domain.Permission;

public class PermissionDefault {
    public static IEnumerable<PermissionItem> Result() {
        var templates = FactoryLoader.Load<IPermission>();
        return templates.SelectMany(template => template.Result()).ToList();
    }
}