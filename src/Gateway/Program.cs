using HotChocolate.Types.Spatial;
using StackExchange.Redis;
using Trace.Common.Infrastructure;
using Trace.Common.Infrastructure.Extensions;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();

var endpoints = Nodes.All.ToDictionary(schema => schema,
    schema => new Uri($"http://service-{schema}")
    );

builder.Services
.AddAuthorization()
.RegisterSchemaHttpClients(endpoints);

builder.Services
.AddGraphQLServer()
.AddRemoteSchemasFromRedis(Nodes.GroupName, sp => sp.GetRequiredService<ConnectionMultiplexer>())
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

WebApplication app = builder.Build();

app.MapGet("/", () => "Trace.Gateway");
app.UseSharedEndpoint();

app.Run();