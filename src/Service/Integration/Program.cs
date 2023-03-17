using Trace.Common.Infrastructure;
using Trace.Common.Infrastructure.Extensions;
using Trace.Service.Integration;

var builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();

builder.Services
.AddAuthorization()
.RegisterHangfire(Nodes.Integration)
.RegisterSharedDataConnector(builder.Configuration);

builder.Services
.AddGraphQLServer()
.AddGraphqlDefaults(Nodes.Integration)
.AddQueryType<Query>()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();
app.MapGet("/", () => "Service.Integration");
app.UseSharedEndpoint();
app.UseHangfireDashboard(builder.Configuration, Nodes.Integration);

app.Run();