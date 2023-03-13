using StackExchange.Redis;
using Trace.Common.Service;
using Trace.Common.Service.Extensions;
using Trace.Service.Identity.Modules;

var builder = WebApplication.CreateBuilder(args);

builder.Services
.AddAuthorization()
.RegisterRedis(builder.Configuration)
.RegisterHangfire();

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
app.RegisterHangfireApp(builder.Configuration);

app.Run();