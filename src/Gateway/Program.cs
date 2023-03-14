using HotChocolate.Types.Spatial;
using StackExchange.Redis;
using Trace.Common.Service;
using Trace.Common.Service.Extensions;

var builder = WebApplication.CreateBuilder(args);

var endpoints = Nodes.All.ToDictionary(schema => schema,
    schema => builder.Configuration.GetServiceUri($"service-{schema}") ??
              throw new ArgumentException($"{schema} must provide a uri endpoint.")
    );

builder.Services
.AddAuthorization()
.RegisterSchemaHttpClients(endpoints)
.RegisterRedis(builder.Configuration)
.RegisterDistributedCache(builder.Configuration);

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

var app = builder.Build();

app.MapGet("/", () => "Trace.Gateway");
app.MapGraphQL();
app.MapGraphQLWebSocket();

app.Run();