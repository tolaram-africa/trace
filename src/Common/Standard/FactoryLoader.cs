namespace Trace.Common.Standard;

public static class FactoryLoader {
    public static IEnumerable<T> Load<T>() {
        return typeof(T).Assembly
        .GetTypes()
        .Where(p => p.IsClass && p.IsAssignableTo(typeof(T)))
        .Select(Activator.CreateInstance)
        .Cast<T>();
    }
}