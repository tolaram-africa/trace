using HotChocolate.Types;
using Trace.Common.Infrastructure.Extensions;
using Trace.Common.Service;
using Trace.Common.Service.Extensions;
using Trace.Service.Integration;

var builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();

builder.Services
.AddAuthorization()
.RegisterHangfire(Nodes.Integration)
.RegisterSharedDataConnector(builder.Configuration);

builder.Services
.AddMemoryCache()
.AddGraphQLServer()
.AddGraphqlDefaults(Nodes.Integration)
.AddType<UploadType>()
.AddQueryType<Query>()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();
app.MapGet("/", () => "Service.Integration");
app.UseSharedEndpoint();
app.UseHangfireDashboard(builder.Configuration, Nodes.Integration);

app.Run();