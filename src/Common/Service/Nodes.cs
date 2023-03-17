namespace Trace.Common.Service;

public static class Nodes {
    public const string GroupName = "Trace";

    public static readonly IReadOnlyList<string> All = new List<string> {
        Identity,
        Integration,
        Operation,
        Route,
        Stream
    };

    // Services
    public const string Identity = "identity";
    public const string Integration = "integration";
    public const string Operation = "operation";
    public const string Route = "route";
    public const string Stream = "stream";
    public const string Manage = "manage";
}