using StackExchange.Redis;
using Trace.Common.Service;
using Trace.Common.Service.Extensions;
using Trace.Service.Identity.Modules;

var builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();

builder.Services
.AddAuthorization()
.RegisterRedis(builder.Configuration)
.RegisterDistributedCache(builder.Configuration)
.RegisterHangfire(Nodes.Identity);

builder.Services
.AddMemoryCache()
.AddGraphQLServer()
.AddTraceDefaults()
.PublishSchemaDefinition(c => {
    c.SetName(Nodes.Identity)
    .PublishToRedis(Nodes.GroupName,
        sp => sp.GetRequiredService<ConnectionMultiplexer>());
})
.AddQueryableCursorPagingProvider()
.AddQueryType<QueryRoot>()
.AddMutationType<MutationRoot>()
.AddSubscriptionType<SubscriptionRoot>()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();

app.MapGet("/", () => "Service.Identity");
app.UseRouting();
app.UseAuthorization();
app.UseWebSockets();
app.MapGraphQL();
app.UseHangfireDashboard(builder.Configuration, Nodes.Identity);

app.Run();