using HotChocolate;
using HotChocolate.Types;
using StackExchange.Redis;
using Trace.Common.Service;
using Trace.Common.Service.Extensions;
using Trace.Service.Stream;

var builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();

builder.Services
.AddAuthorization()
.RegisterRedis(builder.Configuration)
.RegisterDistributedCache(builder.Configuration)
.RegisterHangfire(Nodes.Stream);

builder.Services
.AddMemoryCache()
.AddGraphQLServer()
.AddTraceDefaults()
.PublishSchemaDefinition(c => {
    c.SetName(Nodes.Stream)
    .PublishToRedis(Nodes.GroupName, sp => sp.GetRequiredService<ConnectionMultiplexer>());
})
.AddType<UploadType>()
.AddQueryType<Query>()
.AddSpatialTypes()
.AddSpatialFiltering()
.AddSpatialProjections()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();
app.MapGet("/", () => "Service.Stream");
app.UseRouting();
app.UseAuthorization();
app.UseWebSockets();
app.MapGraphQL();
app.UseHangfireDashboard(builder.Configuration, Nodes.Stream);

app.Run();