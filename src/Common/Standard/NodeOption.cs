namespace Trace.Common.Standard;

public class NodeOption {
    public string Group { get; init; } = String.Empty;
    public string Name { get; init; } = String.Empty;
    public bool Service { get; init; } = true;
    public bool Gateway { get; init; }
    public bool Api { get; init; }
    public bool Graphql { get; init; } = false;
    public string GraphqlRoot { get; init; } = "/";
    public bool Spatial { get; init; }
    public bool Mqtt { get; init; }
    public bool Proxy { get; init; }
    public bool Scheduler { get; init; } = true;
}