using Trace.Common.Infrastructure;
using Trace.Common.Service;
using Trace.Common.Standard;

var option = new NodeOption {
    Group = Nodes.GroupName,
    Name = Nodes.Stream,
    Service = true,
    Graphql = true,
    Spatial = true,
    Mqtt = true,
    Scheduler = true
};

var builder = WebApplication.CreateBuilder(args);
builder.AddInfrastructure<Program>(option);
builder.Services.RegisterService();

var app = builder.Build();
app.RegisterInfrastructure(option);

app.Run();