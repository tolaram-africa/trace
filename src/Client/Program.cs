using Trace.Common.Infrastructure;
using Trace.Common.Standard;

var option = new NodeOption {
    Group = Nodes.GroupName,
    Name = Nodes.Client,
    Service = false,
    Graphql = false,
    Proxy = true,
    Scheduler = false
};

var builder = WebApplication.CreateBuilder(args);
builder.AddInfrastructure<Program>(option);

var app = builder.Build();
app.RegisterInfrastructure(option);

app.Run();