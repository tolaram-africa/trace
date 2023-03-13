using HotChocolate.Types;

namespace Trace.Service.Identity.Modules.State.Mutations;

[ExtendObjectType(typeof(MutationRoot))]
public class StateMutations {
    public int TriggerCheck(int input) => input;
}