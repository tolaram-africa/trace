using HotChocolate.Types;

namespace Trace.Service.Identity.Features.State.Queries;

[ExtendObjectType(typeof(QueryRoot))]
public class StateQueries {
    public int GetStateCheck() => 1;
}