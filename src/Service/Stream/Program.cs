using HotChocolate;
using Trace.Common.Infrastructure;
using Trace.Common.Infrastructure.Extensions;
using Trace.Service.Stream;

var builder = WebApplication.CreateBuilder(args)
.RegisterSharedArchitecture()
.RegisterMqttService();

builder.Services
.AddAuthorization()
.RegisterHangfire(Nodes.Stream)
.RegisterSharedDataConnector();

builder.Services
.AddGraphQLServer()
.AddGraphqlDefaults(Nodes.Stream)
.AddQueryType<Query>()
.AddSpatialTypes()
.AddSpatialFiltering()
.AddSpatialProjections()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();
// app.MapGet("/", () => "Service.Stream");
app.UseSharedEndpoint();
app.UseHangfireDashboard(Nodes.Stream);
app.UseMqtt();

app.Run();