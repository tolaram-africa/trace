using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using StackExchange.Redis;

namespace Trace.Common.Service.Extensions;

public static class ServiceCollectionExtension {

    public static IServiceCollection RegisterRedis(this IServiceCollection services, IConfiguration config) {
        var redisConnectionString = config.GetConnectionString("redis") ?? "localhost";
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

    public static IServiceCollection RegisterDistributedCache(this IServiceCollection services, IConfiguration config) {
        var sp = services.BuildServiceProvider();

        services.AddDataProtection()
        .SetApplicationName(Nodes.GroupName)
        .PersistKeysToStackExchangeRedis(sp.GetRequiredService<ConnectionMultiplexer>(), "DataProtection-Keys");

        services.AddStackExchangeRedisCache(options => {
            options.Configuration = config.GetConnectionString("redis") ?? "localhost";
            options.InstanceName = "";
        });

        services.AddSession(o => {
            o.Cookie.Name = Nodes.GroupName;
            o.Cookie.SameSite = SameSiteMode.None;
            o.IdleTimeout = TimeSpan.FromMinutes(10);
            // o.Cookie.HttpOnly = true;
        });

        return services;
    }
}