using AutoCrudAdmin.Extensions;
using Microsoft.EntityFrameworkCore;
using Trace.Common.Domain.Context;
using Trace.Common.Infrastructure;
using Trace.Common.Infrastructure.Extensions;
using Trace.Manager;

var builder = WebApplication.CreateBuilder(args).RegisterSharedArchitecture();
builder.Services.AddControllersWithViews();
builder.Services
.AddAuthorization()
.RegisterHangfire(Nodes.Manage)
.RegisterSharedDataConnector();

builder.Services.AddControllersWithViews();
if (builder.Environment.IsDevelopment())
    builder.Services.AddSpaYarp();
builder.Services.AddReverseProxy()
.LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

builder.Services.AddScoped<DbContext, OperationContext>();
builder.Services.UseAutoCrudAdmin();

builder.Services
.AddGraphQLServer()
.AddGraphqlDefaults(Nodes.Manage)
.AddQueryType<Query>()
.AddQueryableCursorPagingProvider()
.RegisterObjectExtensions(typeof(Program).Assembly);

var app = builder.Build();
if (!app.Environment.IsDevelopment())
    app.UseHsts();
else
    app.UseSpaYarp();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseSharedEndpoint();
app.UseHangfireDashboard(Nodes.Stream);

app.AddAutoCrudAdmin( "admin-x");

app.MapReverseProxy();
app.MapFallbackToFile("index.html");

app.Run();