using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.Types.Spatial;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using StackExchange.Redis;
using Trace.Common.Infrastructure.Extensions;
using Trace.Common.Standard;
using Trace.Shared.Base.Features.State.Queries;
using Trace.Shared.Base.GraphqlRoot;

namespace Trace.Common.Infrastructure;

public static class DependencyInjection {
    public static WebApplicationBuilder AddInfrastructure<T>(this WebApplicationBuilder builder, NodeOption option) where T : class {
        builder.RegisterSharedArchitecture();
        builder.Services.AddControllers();

        if (option.Service)
            builder.Services.RegisterSharedDataConnector();
        
        if (option.Scheduler)
            builder.Services .RegisterHangfire(option.Name);
        
        if (option.Mqtt)
            builder.RegisterMqttService();
        
        if (option.Api)
            builder.Services.AddEndpointsApiExplorer().AddSwaggerGen();
        
        if (option.Proxy) {
            builder.Services.AddControllersWithViews();
#if DEBUG
            builder.Services.AddSpaYarp();
#endif
            builder.Services.AddReverseProxy()
            .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));
        }

        if (!option.Graphql)
            return builder;

        var instance = builder.Services
        .AddAuthorization()
        .AddGraphQLServer();

        if (option.Service) {
            instance.AddGraphqlDefaults(option.Name)
            .AddQueryType<QueryRoot>()
            .AddMutationType<MutationRoot>()
            .AddSubscriptionType<SubscriptionRoot>()
            .AddQueryableCursorPagingProvider()
            .RegisterObjectExtensions(typeof(T).Assembly)
            .RegisterObjectExtensions(typeof(StateQueries).Assembly);
        }

        if (option.Spatial)
            instance.AddSpatialTypes()
            .AddSpatialFiltering()
            .AddSpatialProjections();

        // GraphQL gateway
        if (!option.Gateway)
            return builder;

        var endpoints = Nodes.All.ToDictionary(schema => schema,
            schema => new Uri($"http://service-{schema}")
        );

        builder.Services.RegisterSchemaHttpClients(endpoints);
        instance.AddRemoteSchemasFromRedis(Nodes.GroupName, sp => sp.GetRequiredService<ConnectionMultiplexer>())
        .AddHttpRequestInterceptor<RequestInterceptor>()
        .AddType<GeoJsonPositionType>()
        .AddType<GeoJsonCoordinatesType>(); 
        
        // Set Spatial type for route service
        builder.Services
        .AddGraphQL(Nodes.Route)
        .AddType<GeoJsonPositionType>()
        .AddType<GeoJsonCoordinatesType>();
        
        // Set Spatial type for stream service
        builder.Services
        .AddGraphQL(Nodes.Stream)
        .AddType<GeoJsonPositionType>()
        .AddType<GeoJsonCoordinatesType>();

        return builder;
    }

    public static WebApplication RegisterInfrastructure(this WebApplication app, NodeOption option) {
        app.UseRouting();
        app.UseAuthorization();
        app.UseSession();
        app.UseWebSockets();
        app.MapControllers();
        app.MapControllerRoute(
            name: "default",
            pattern: "{controller}/{action=Index}/{id?}");
        app.UseAuthorization();

        if (option.Scheduler) app.UseHangfireDashboard(option.Name);
        if(option.Mqtt) app.UseMqtt();
        
        if (option.Api) {
            app.UseHttpsRedirection();
            app.UseReDoc();
            if (app.Environment.IsDevelopment()) {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
        }
        
        if (option.Proxy) {
            app.UseHttpsRedirection();
            app.UseStaticFiles();
#if DEBUG
            app.UseSpaYarp();
#endif
            app.MapReverseProxy();
            app.MapFallbackToFile("index.html");
            if (!app.Environment.IsDevelopment()) app.UseHsts();
        }

        if (!option.Graphql) {
            return app;
        }

        app.MapBananaCakePop().WithOptions(
            new GraphQLToolOptions {
                DisableTelemetry = true
            });
        app.MapGraphQL(option.GraphqlRoot).WithOptions(
            new GraphQLServerOptions {
                EnableMultipartRequests = true,
                EnableBatching = true,
                Tool = {
                    Enable = app.Environment.IsDevelopment()
                }
            });

        return app;
    }
}