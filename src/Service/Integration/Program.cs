using HotChocolate.Types;
using StackExchange.Redis;
using Trace.Common.Service;
using Trace.Common.Service.Extensions;
using Trace.Service.Integration;

var builder = WebApplication.CreateBuilder(args);

builder.Services
.AddAuthorization()
.RegisterRedis(builder.Configuration)
.RegisterDistributedCache(builder.Configuration)
.RegisterHangfire(Nodes.Integration);

builder.Services
.AddMemoryCache()
.AddGraphQLServer()
.AddTraceDefaults()
.PublishSchemaDefinition(c => {
    c.SetName(Nodes.Integration)
    .PublishToRedis(Nodes.GroupName, sp => sp.GetRequiredService<ConnectionMultiplexer>());
})
.AddType<UploadType>()
.AddQueryType<Query>()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();
app.MapGet("/", () => "Service.Integration");
app.UseRouting();
app.UseAuthorization();
app.UseWebSockets();
app.MapGraphQL();
app.UseHangfireDashboard(builder.Configuration, Nodes.Integration);

app.Run();