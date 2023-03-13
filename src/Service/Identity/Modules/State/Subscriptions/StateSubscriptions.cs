using HotChocolate;
using HotChocolate.Types;

namespace Trace.Service.Identity.Modules.State.Subscriptions;

[ExtendObjectType(typeof(SubscriptionRoot))]
public class StateSubscriptions {
    public int OnStateCheck([EventMessage] int input) {
        return input;
    }
}