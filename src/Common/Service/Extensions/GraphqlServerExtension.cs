using HotChocolate.Execution.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Nextended.Core.Extensions;
using StackExchange.Redis;

namespace Trace.Common.Service.Extensions;

public static class GraphqlServerExtension {
    public static IRequestExecutorBuilder AddGraphqlDefaults(this IRequestExecutorBuilder services, string? name = null) {
        services
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

        if (name is not null)
            services.PublishSchemaDefinition(c => {
                c.SetName(Nodes.Identity)
                .PublishToRedis(name,
                    sp => sp.GetRequiredService<ConnectionMultiplexer>());
            });

        return services;
    }
}