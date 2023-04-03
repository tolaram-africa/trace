using HotChocolate.Types;
using Trace.Shared.Base.GraphqlRoot;

namespace Trace.Shared.Base.Features.State.Mutations;

[ExtendObjectType(typeof(MutationRoot))]
public class StateMutations {
    public int TriggerCheck(int input) => input;
}