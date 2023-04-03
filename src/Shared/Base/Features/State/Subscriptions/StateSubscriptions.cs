using HotChocolate;
using HotChocolate.Types;
using Trace.Shared.Base.GraphqlRoot;

namespace Trace.Shared.Base.Features.State.Subscriptions;

[ExtendObjectType(typeof(SubscriptionRoot))]
public class StateSubscriptions {
    public int OnStateCheck([EventMessage] int input) {
        return input;
    }
}