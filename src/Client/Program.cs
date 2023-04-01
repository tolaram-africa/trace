using Trace.Common.Infrastructure.Extensions;

var builder = WebApplication.CreateBuilder(args);
builder.RegisterSharedArchitecture();
builder.Services.AddControllersWithViews();
builder.Services.AddReverseProxy()
.LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
  app.UseHsts();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.MapReverseProxy();
app.MapFallbackToFile("index.html");

app.Run();
