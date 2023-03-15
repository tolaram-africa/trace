using HotChocolate.Types;
using StackExchange.Redis;
using Trace.Common.Service;
using Trace.Common.Service.Extensions;
using Trace.Service.Manage;

var builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();

builder.Services
.AddAuthorization()
.RegisterRedis(builder.Configuration)
.RegisterDistributedCache(builder.Configuration)
.RegisterHangfire(Nodes.Manage);

builder.Services
.AddMemoryCache()
.AddGraphQLServer()
.AddTraceDefaults()
.PublishSchemaDefinition(c => {
    c.SetName(Nodes.Manage)
    .PublishToRedis(Nodes.GroupName, sp => sp.GetRequiredService<ConnectionMultiplexer>());
})
.AddType<UploadType>()
.AddQueryType<Query>()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();
app.MapGet("/", () => "Service.Manage");
app.UseRouting();
app.UseAuthorization();
app.UseWebSockets();
app.MapGraphQL();
app.UseHangfireDashboard(builder.Configuration, Nodes.Manage);

app.Run();