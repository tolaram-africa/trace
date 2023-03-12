using HotChocolate.Execution.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Trace.Common.Service;

public static class GraphqlServerExtensions {
    public static IRequestExecutorBuilder AddTraceDefaults(this IRequestExecutorBuilder services) {
        return services
        .InitializeOnStartup()
        .AddSorting()
        .AddFiltering()
        .AddProjections()
        .AddType<UploadType>()
        .UseAutomaticPersistedQueryPipeline()
        .AddInMemoryQueryStorage()
        .AddApolloTracing()
        .AddMutationConventions(applyToAllMutations: true)
        // .AddRedisSubscriptions(sp => sp.GetRequiredService<ConnectionMultiplexer>())
        .ModifyRequestOptions(opt => {
            opt.Complexity.ApplyDefaults = true;
            opt.Complexity.DefaultComplexity = 1;
            opt.Complexity.DefaultResolverComplexity = 5;
        });
    }
}