using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.Types.Spatial;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
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
        builder.Services.AddControllersWithViews();

        if (option.Service)
            builder.Services.RegisterSharedDataConnector();

        if (option.Scheduler)
            builder.Services.RegisterHangfire(option.Name);

        if (option.Mqtt)
            builder.RegisterMqttService();

        if (option.Api)
            builder.Services.AddEndpointsApiExplorer().AddSwaggerGen();


#if DEBUG
        if (option.Spa) builder.Services.AddSpaYarp();
#endif
        if (option.Proxy) builder.Services.AddReverseProxy()
            .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

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

        app.UseAuthorization();
        app.MapControllers();
        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseRouting();
        app.MapControllerRoute(
            name: "default",
            pattern: "{controller}/{action=Index}/{id?}");
        app.UseSession();
        app.UseWebSockets();
        app.UseCors(x =>
            x.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

        if (!app.Environment.IsDevelopment()) app.UseHsts();
        if (option.Scheduler) app.UseHangfireDashboard(option.Name);
        if (option.Mqtt) app.UseMqtt();
        if (option.Api) {
            app.UseReDoc();
            if (app.Environment.IsDevelopment()) {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
        }

        if (option.Graphql) {
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
        }

        if (option.Proxy) app.MapReverseProxy(proxyBuilder => {
            proxyBuilder.Use(async (context, next) => {
                var endpoint = context.GetEndpoint();
                var path = context.Request.Path.ToString();

                if (path.Contains("swagger")) {
                    Console.WriteLine($"===========>>> Swagger Here: {endpoint}");
                    return;
                }

                await next();
            });

            proxyBuilder.UseLoadBalancing();
        });

#if DEBUG
        if (!option.Spa) return app;
        app.UseSpaYarp();
        app.MapFallbackToFile("index.html");
#endif

    return app;
    }
}