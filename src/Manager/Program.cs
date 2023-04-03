using Trace.Common.Infrastructure;
using Trace.Common.Service;
using Trace.Common.Standard;

var option = new NodeOption {
    Group = Nodes.GroupName,
    Name = Nodes.Manager,
    Api = true,
    Proxy = true,
    Service = true,
    Graphql = true,
    GraphqlRoot = "/graphql",
    Scheduler = true
};

var builder = WebApplication.CreateBuilder(args);
builder.AddInfrastructure<Program>(option);
builder.Services.RegisterService();

var app = builder.Build();
app.RegisterInfrastructure(option);

app.Run();