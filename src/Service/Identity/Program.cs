using Trace.Service.Identity;

var builder = WebApplication.CreateBuilder(args);
builder.Services
.AddGraphQLServer()
.AddQueryType<Query>();

var app = builder.Build();

app.MapGet("/", () => "Service.Identity");
app.MapGraphQL();

app.Run();
