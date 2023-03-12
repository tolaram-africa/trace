using HotChocolate.Types.Spatial;
using StackExchange.Redis;
using Trace.Common.Service;

var builder = WebApplication.CreateBuilder(args);

var endpoints = Nodes.All.ToDictionary(schema => schema,
    schema => builder.Configuration.GetValue<Uri>($"Services:{schema}") ??
              throw new ArgumentException($"{schema} must provide a uri endpoint.")
    );
builder.Services.RegisterSchemaHttpClients(endpoints);
builder.Services.AddSingleton(ConnectionMultiplexer.Connect("localhost:6379"));

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

// Set Spatial type for track service
builder.Services
.AddGraphQL(Nodes.Track)
.AddType<GeoJsonPositionType>()
.AddType<GeoJsonCoordinatesType>();

var app = builder.Build();

app.MapGet("/", () => "Trace.Gateway");
app.MapGraphQL();
app.MapGraphQLWebSocket();
app.Run();