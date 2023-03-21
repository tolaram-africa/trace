using Trace.Common.Infrastructure;
using Trace.Common.Infrastructure.Extensions;
using Trace.Service.Identity.Features;

var builder = WebApplication
.CreateBuilder(args)
.RegisterSharedArchitecture();

builder.Services
.AddAuthorization()
.RegisterHangfire(Nodes.Identity)
.RegisterSharedDataConnector();

builder.Services
.AddGraphQLServer()
.AddGraphqlDefaults(Nodes.Identity)
.AddQueryableCursorPagingProvider()
.AddQueryType<QueryRoot>()
.AddMutationType<MutationRoot>()
.AddSubscriptionType<SubscriptionRoot>()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();

app.MapGet("/", () => "Service.Identity");
app.UseSharedEndpoint();
app.UseHangfireDashboard(Nodes.Stream);

app.Run();