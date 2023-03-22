using HotChocolate.Types;
using Trace.Common.Infrastructure.GraphqlRoot;

namespace Trace.Service.Identity.Features.State.Mutations;

[ExtendObjectType(typeof(MutationRoot))]
public class StateMutations {
    public int TriggerCheck(int input) => input;
}