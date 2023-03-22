namespace Trace.Common.Domain.Permission;

public class PermissionDefault {
    private static IEnumerable<T> LoadInstances<T>() {
        return typeof(T).Assembly
        .GetTypes()
        .Where(p => p.IsClass && p.IsAssignableTo(typeof(T)))
        .Select(Activator.CreateInstance)
        .Cast<T>();
    }

    public static IEnumerable<PermissionItem> Result() {
        var templates = LoadInstances<IPermissionTemplate>();
        return templates.SelectMany(template => template.Result()).ToList();
    }
}