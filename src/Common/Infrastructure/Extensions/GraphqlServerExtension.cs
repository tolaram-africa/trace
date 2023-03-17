using HotChocolate.Execution.Configuration;
using HotChocolate.Types;
using Microsoft.Extensions.DependencyInjection;
using StackExchange.Redis;
using Trace.Common.Infrastructure.Persistence.Context;

namespace Trace.Common.Infrastructure.Extensions;

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
        .RegisterDbContext<OperationContext>()
        .AddApolloTracing()
        .AddMutationConventions(applyToAllMutations: true)
        .AddRedisSubscriptions(sp => sp.GetRequiredService<ConnectionMultiplexer>())
        .ModifyRequestOptions(opt => {
            opt.Complexity.ApplyDefaults = true;
            opt.Complexity.DefaultComplexity = 1;
            opt.Complexity.DefaultResolverComplexity = 5;
        });

        if (name is not null)
            services.PublishSchemaDefinition(c => {
                c.SetName(name)
                .PublishToRedis(Nodes.GroupName,
                    sp => sp.GetRequiredService<ConnectionMultiplexer>());
            });

        return services;
    }
}