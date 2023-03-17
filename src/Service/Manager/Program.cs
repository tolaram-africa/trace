using HotChocolate.Types;
using Trace.Common.Infrastructure.Extensions;
using Trace.Common.Service;
using Trace.Common.Service.Extensions;
using Trace.Service.Manage;

var builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();

builder.Services
.AddAuthorization()
.RegisterHangfire(Nodes.Manage)
.RegisterSharedDataConnector(builder.Configuration);

builder.Services
.AddMemoryCache()
.AddGraphQLServer()
.AddGraphqlDefaults(Nodes.Manage)
.AddType<UploadType>()
.AddQueryType<Query>()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();
app.MapGet("/", () => "Service.Manage");
app.UseSharedEndpoint();
app.UseHangfireDashboard(builder.Configuration, Nodes.Manage);

app.Run();