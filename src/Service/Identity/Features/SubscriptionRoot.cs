namespace Trace.Service.Identity.Features;

/// <summary>
/// This entity acts as our root node, from here we hang each of subscriptions off it via annotations
/// </summary>
public class SubscriptionRoot {
    public string Version => "Trace";
}