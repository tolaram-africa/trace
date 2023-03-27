namespace Trace.Common.Standard;

public static class FactoryLoader {
    public static IEnumerable<T> Load<T>() =>
    typeof(T).Assembly
        .GetTypes()
        .Where(p => p is { IsClass: true, IsAbstract: false } && p.IsAssignableTo(typeof(T)))
        .Select(Activator.CreateInstance)
        .Cast<T>();
}