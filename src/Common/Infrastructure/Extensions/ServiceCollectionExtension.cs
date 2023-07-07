using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Redis.OM;
using StackExchange.Redis;
using Steeltoe.Bootstrap.Autoconfig;
using Steeltoe.Common.Http.Discovery;
using Steeltoe.Connector.Redis;
using Steeltoe.Discovery.Client;
using Steeltoe.Discovery.Consul;
using Steeltoe.Extensions.Configuration.ConfigServer;
using Steeltoe.Extensions.Configuration.Kubernetes;
using Steeltoe.Management.Endpoint;
using Steeltoe.Management.Tracing;
using Steeltoe.Security.DataProtection;

namespace Trace.Common.Infrastructure.Extensions;

public static class ServiceCollectionExtension
{
    public static IServiceCollection RegisterSchemaHttpClients(this IServiceCollection services,
        IDictionary<string, Uri> schemas)
    {
        foreach (var schema in schemas)
        {
            services.AddTransient<DiscoveryHttpMessageHandler>();
            services.AddHttpClient(schema.Key, c =>
            {
                ArgumentNullException.ThrowIfNull(schema.Value, "GraphqlEndpoint");
                c.BaseAddress = new Uri(schema.Value, string.Empty);
            })
            .AddHttpMessageHandler<DiscoveryHttpMessageHandler>();
        }

        return services;
    }

    public static void RegisterDistributedCache(this IServiceCollection services)
    {
        var sp = services.BuildServiceProvider();
        var config = sp.GetService<IConfiguration>();

        services.AddDistributedRedisCache(config);
        services
        .AddDataProtection()
        .PersistKeysToRedis()
        .SetApplicationName(Nodes.GroupName);

        services.AddStackExchangeRedisCache(options =>
        {
            options.Configuration = sp.GetRequiredService<ConnectionMultiplexer>().Configuration;
            options.InstanceName = "";
        });
        services.AddHttpContextAccessor();
        services.AddSession(o =>
        {
            o.Cookie.Name = $"{Nodes.GroupName}.Session";
            o.IdleTimeout = TimeSpan.FromMinutes(10);
            o.Cookie.IsEssential = true;
        });

    }

    public static WebApplicationBuilder RegisterSharedArchitecture(this WebApplicationBuilder builder)
    {
        var env = builder.Environment;
        var config = builder.Configuration;

        config.SetBasePath(env.ContentRootPath)
        .AddYamlFile("config.yaml", optional: true, reloadOnChange: true)
        .AddYamlFile($"config.{env.EnvironmentName}.yaml", optional: true, reloadOnChange: true)
        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
        .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: true)
        .AddKubernetes()
        .AddConfigServer()
        .AddEnvironmentVariables();

        builder.AddSteeltoe();
        builder.Services.AddDiscoveryClient(config);
        builder.Services.AddRedisConnectionMultiplexer(config);
        builder.Services.RegisterDistributedCache();
        var multiplexer = ConnectionMultiplexer.Connect(config.GetConnectionString("Redis") ?? "localhost");
        builder.Services.AddSingleton(new RedisConnectionProvider(multiplexer));
        builder.Services.AddServiceDiscovery(o => o.UseConsul());
        builder.Services.AddAllActuators(config);
        builder.Services.ActivateActuatorEndpoints();
        builder.Services.AddDistributedTracingAspNetCore();
        builder.Services.AddSpringBootAdminClient();
        builder.Services.Configure<FormOptions>(options =>
        {
            options.MultipartBodyLengthLimit = 268435456;
        });

        return builder;
    }
}