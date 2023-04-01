using Trace.Common.Infrastructure;
using Trace.Common.Infrastructure.Extensions;
using Trace.Manager;

var builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();
builder.Services.AddControllersWithViews();
builder.Services
.AddAuthorization()
.RegisterHangfire(Nodes.Manage)
.RegisterSharedDataConnector();

builder.Services
.AddGraphQLServer()
.AddGraphqlDefaults(Nodes.Manage)
.AddQueryType<Query>()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();
if (!app.Environment.IsDevelopment())
    app.UseHsts();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.MapFallbackToFile("index.html");

app.UseSharedEndpoint();
app.UseHangfireDashboard(Nodes.Stream);

app.Run();