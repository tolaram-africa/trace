namespace Trace.Common.Infrastructure;

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
    public const string Gateway = nameof(Gateway);
    public const string Client = nameof(Client);
    public const string Identity = nameof(Identity);
    public const string Integration = nameof(Integration);
    public const string Operation = nameof(Operation);
    public const string Route = nameof(Route);
    public const string Stream = nameof(Stream);
    public const string Manager = nameof(Manager);
    public const string Worker = nameof(Worker);
}