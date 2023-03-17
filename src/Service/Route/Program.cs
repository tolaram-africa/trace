using HotChocolate;
using HotChocolate.Types;
using Trace.Common.Infrastructure;
using Trace.Common.Infrastructure.Extensions;
using Trace.Service.Route;

var builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();

builder.Services
.AddAuthorization()
.RegisterHangfire(Nodes.Route)
.RegisterSharedDataConnector(builder.Configuration);

builder.Services
.AddGraphQLServer()
.AddGraphqlDefaults(Nodes.Route)
.AddQueryType<Query>()
.AddSpatialTypes()
.AddSpatialFiltering()
.AddSpatialProjections()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);


var app = builder.Build();
app.MapGet("/", () => "Service.Route");
app.UseSharedEndpoint();
app.UseHangfireDashboard(builder.Configuration, Nodes.Route);

app.Run();