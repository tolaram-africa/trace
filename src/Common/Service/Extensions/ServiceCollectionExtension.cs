using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Debug;
using StackExchange.Redis;
using Steeltoe.Bootstrap.Autoconfig;
using Steeltoe.Common.Http.Discovery;
using Steeltoe.Connector;
using Steeltoe.Connector.MongoDb;
using Steeltoe.Connector.PostgreSql;
using Steeltoe.Connector.RabbitMQ;
using Steeltoe.Connector.Redis;
using Steeltoe.Discovery.Client;
using Steeltoe.Discovery.Consul;
using Steeltoe.Extensions.Configuration.ConfigServer;
using Steeltoe.Management.Endpoint;
using Steeltoe.Management.Tracing;
using Steeltoe.Messaging.RabbitMQ.Config;
using Steeltoe.Messaging.RabbitMQ.Extensions;

namespace Trace.Common.Service.Extensions;

public static class ServiceCollectionExtension {
    public static IServiceCollection RegisterSchemaHttpClients(this IServiceCollection services,
        IDictionary<string, Uri> schemas) {
        foreach (var schema in schemas) {
            services.AddTransient<DiscoveryHttpMessageHandler>();
            services.AddHttpClient(schema.Key, c => {
                ArgumentNullException.ThrowIfNull(schema.Value, "GraphqlEndpoint");
                c.BaseAddress = new Uri(schema.Value, "/graphql");
            })
            .AddHttpMessageHandler<DiscoveryHttpMessageHandler>();
        }

        return services;
    }

    private static IServiceCollection RegisterDistributedCache(this IServiceCollection services, IConfiguration config) {
        var sp = services.BuildServiceProvider();
        services.AddDataProtection()
        .SetApplicationName(Nodes.GroupName)
        .PersistKeysToStackExchangeRedis(sp.GetRequiredService<ConnectionMultiplexer>(), "DataProtection-Keys");

        services.AddStackExchangeRedisCache(options => {
            options.Configuration = sp.GetRequiredService<ConnectionMultiplexer>().Configuration;
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

    public static WebApplicationBuilder RegisterSharedArchitecture(this WebApplicationBuilder builder) {
        var env = builder.Environment;
        LoggerFactory loggerFactory = new LoggerFactory(new List<ILoggerProvider> {
            new DebugLoggerProvider()
        });
        
        builder.Configuration.SetBasePath(env.ContentRootPath)
        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
        .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: true)
        .AddConfigServer()
        .AddEnvironmentVariables();
        
        // Adds connections
        builder.AddSteeltoe(loggerFactory: loggerFactory);
        builder.Services.AddDiscoveryClient(builder.Configuration);
        builder.Services.AddRedisConnectionMultiplexer(builder.Configuration);
        builder.Services.AddRabbitMQConnection(builder.Configuration);

        builder.Services.AddDistributedRedisCache(builder.Configuration);
        builder.Services.RegisterDistributedCache(builder.Configuration);
        builder.Services.AddServiceDiscovery(o => o.UseConsul());
        
        builder.Services.AddDistributedTracing();
        builder.Services.AddDistributedTracingAspNetCore();
        builder.Services.AddAllActuators();
        
        builder.Services.AddRabbitServices();
        builder.Services.AddRabbitAdmin();
        builder.Services.AddRabbitTemplate();
        builder.Services.AddRabbitQueue(new Queue("default"));
        

        return builder;
    }
}