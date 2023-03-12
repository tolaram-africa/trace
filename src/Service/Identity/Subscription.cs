using HotChocolate;
using HotChocolate.Types;

namespace Trace.Service.Identity;

public class Subscription {
    [Subscribe]
    public int OnTest([EventMessage] int test) => test;
}