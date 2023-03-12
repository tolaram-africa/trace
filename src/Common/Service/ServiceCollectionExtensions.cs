using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using StackExchange.Redis;

namespace Trace.Common.Service;

public static class ServiceCollectionExtensions {
    public static IServiceCollection RegisterRedis(this IServiceCollection services, IConfiguration config) {
        var redisConnectionString = config.GetValue<string>("Database:Redis");
        return services.AddSingleton(sp => {
            ArgumentNullException.ThrowIfNull(redisConnectionString);
            return ConnectionMultiplexer.Connect(redisConnectionString);
        });
    }

    public static IServiceCollection RegisterSchemaHttpClients(this IServiceCollection services,
        IDictionary<string, Uri> schemas) {
        foreach (var schema in schemas) {
            services.AddHttpClient(schema.Key, c => {
                ArgumentNullException.ThrowIfNull(schema.Value, "GraphqlEndpoint");
                c.BaseAddress = new Uri(schema.Value, "/graphql");
            });
        }

        return services;
    }
}