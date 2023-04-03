using HotChocolate.Types;
using Trace.Shared.Base.GraphqlRoot;

namespace Trace.Shared.Base.Features.State.Queries;

[ExtendObjectType(typeof(QueryRoot))]
public class StateQueries {
    public int GetStateCheck() => 1;
}