using Trace.Common.Infrastructure.Extensions;

var builder = WebApplication.CreateBuilder(args);
builder.RegisterSharedArchitecture();

builder.Services.AddControllersWithViews();
if (builder.Environment.IsDevelopment())
    builder.Services.AddSpaYarp();
builder.Services.AddReverseProxy()
.LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
    app.UseHsts();
else
    app.UseSpaYarp();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapReverseProxy();
app.MapFallbackToFile("index.html");

app.Run();
