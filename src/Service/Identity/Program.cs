using StackExchange.Redis;
using Trace.Common.Service;
using Trace.Service.Identity;

var builder = WebApplication.CreateBuilder(args);

builder.Services
.AddAuthorization()
.RegisterRedis(builder.Configuration);

builder.Services
.AddMemoryCache()
.AddGraphQLServer()
.AddTraceDefaults()
.PublishSchemaDefinition(c => {
    c.SetName(Nodes.Identity)
    .PublishToRedis(Nodes.GroupName,
        sp => sp.GetRequiredService<ConnectionMultiplexer>());
})
.AddQueryType<Query>()
.AddSubscriptionType<Subscription>()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();

app.MapGet("/", () => "Service.Identity");
app.UseRouting();
app.UseAuthorization();
app.UseWebSockets();
app.MapGraphQL();

app.Run();