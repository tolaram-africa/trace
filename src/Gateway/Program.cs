using HotChocolate.Types.Spatial;
using StackExchange.Redis;
using Steeltoe.Common.Discovery;
using Steeltoe.Discovery;
using Steeltoe.Discovery.Client;
using Trace.Common.Service;
using Trace.Common.Service.Extensions;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();

var endpoints = Nodes.All.ToDictionary(schema => schema,
    schema => new Uri($"http://service-{schema}")
    );

builder.Services
.AddAuthorization()
.RegisterSchemaHttpClients(endpoints);

builder.Services
.AddGraphQLServer()
.AddType<GeoJsonPositionType>()
.AddType<GeoJsonCoordinatesType>()
.AddRemoteSchemasFromRedis(Nodes.GroupName, sp => sp.GetRequiredService<ConnectionMultiplexer>());

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

WebApplication app = builder.Build();

app.MapGet("/", () => "Trace.Gateway");
app.UseWebSockets();
app.MapGraphQL();
app.MapGraphQLWebSocket();

app.Run();