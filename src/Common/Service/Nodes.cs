namespace Trace.Common.Service;

public static class Nodes {
    public const string GroupName = "Trace";
    public const string SchemaPath = "./Stitching.graphql";

    public static IReadOnlyList<string> All = new List<string> {
        Identity,
        Integration,
        Operation,
        Route,
        Track
    };

    // Services
    public const string Identity = "identity";
    public const string Integration = "integration";
    public const string Operation = "operation";
    public const string Route = "route";
    public const string Track = "track";
    public const string Manager = "manager";
}