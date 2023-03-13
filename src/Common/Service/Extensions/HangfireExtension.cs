using Hangfire;
using HangfireBasicAuthenticationFilter;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using StackExchange.Redis;

namespace Trace.Common.Service.Extensions;

public static class HangfireExtension {
    public static IServiceCollection RegisterHangfire(this IServiceCollection services) {
        services.AddHangfire((sp, config) => {
            config.UseRedisStorage(sp.GetRequiredService<ConnectionMultiplexer>())
            .UseSimpleAssemblyNameTypeSerializer()
            .UseRecommendedSerializerSettings();
        });
        services.AddHangfireServer();

        return services;
    }

    public static IApplicationBuilder RegisterHangfireApp(this IApplicationBuilder app, IConfiguration config) {
        var endpoint = config.GetValue<string>("Hangfire:Endpoint") ?? "/schedule";
        app.UseHangfireDashboard(endpoint, new DashboardOptions {
            DashboardTitle = "Trace Schedule",
            Authorization = new[] {
                new HangfireCustomBasicAuthenticationFilter{
                    User = config.GetValue<string>("Hangfire:Username") ?? "trace",
                    Pass = config.GetValue<string>("Hangfire:Password") ?? "trace"
                }
            }
        });

        return app;
    }
}