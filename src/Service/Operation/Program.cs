using Trace.Common.Infrastructure;
using Trace.Common.Infrastructure.Extensions;
using Trace.Service.Operation;

var builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();

builder.Services
.AddAuthorization()
.RegisterHangfire(Nodes.Operation)
.RegisterSharedDataConnector(builder.Configuration);

builder.Services
.AddMemoryCache()
.AddGraphQLServer()
.AddGraphqlDefaults(Nodes.Operation)
.AddType<UploadType>()
.AddQueryType<Query>()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();
app.MapGet("/", () => "Service.Operation");
app.UseSharedEndpoint();
app.UseHangfireDashboard(builder.Configuration, Nodes.Operation);

app.Run();