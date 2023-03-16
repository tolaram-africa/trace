using HotChocolate.Types;

namespace Trace.Service.Identity.Features.State.Mutations;

[ExtendObjectType(typeof(MutationRoot))]
public class StateMutations {
    public int TriggerCheck(int input) => input;
}