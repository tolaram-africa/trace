using Hangfire;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Steeltoe.Bootstrap.Autoconfig;
using Steeltoe.Connector.Redis;
using Steeltoe.Discovery.Client;
using Steeltoe.Extensions.Configuration.ConfigServer;
using Steeltoe.Management.Tracing;
using Trace.Common.Infrastructure.Extensions;
using Trace.Worker;

IHost host = Host.CreateDefaultBuilder(args)
.ConfigureWebHostDefaults(builder => {
    builder.ConfigureAppConfiguration(conf => {
        conf.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
        .AddConfigServer()
        .AddEnvironmentVariables();
    });
    var exclusions = new List<string> {
        SteeltoeAssemblies.Steeltoe_Connector_ConnectorCore,
    };
    
    builder.AddSteeltoe(exclusions);
    builder.Configure(app => {
        app.UseRouting();
        app.UseHangfireDashboard();
    });
})
.ConfigureServices((context, services) => {
    var config = context.Configuration;
    
    services.AddDiscoveryClient(config);
    services.AddRedisConnectionMultiplexer(config);
    services.RegisterDistributedCache();
    services.AddDistributedTracing();
    services.RegisterSharedDataConnector();
    services.RegisterHangfire("Worker");
    services.AddHostedService<MaintenanceWorker>();
    services.AddHostedService<MigrationService>();
})
.Build();

host.Run();
