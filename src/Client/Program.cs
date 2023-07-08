using Trace.Common.Infrastructure;
using Trace.Common.Standard;

var option = new NodeOption {
    Group = Nodes.GroupName,
    Name = Nodes.Client,
    Service = true,
    Spa = true
};

var builder = WebApplication.CreateBuilder(args);
builder.AddInfrastructure<Program>(option);

var app = builder.Build();
app.RegisterInfrastructure(option);

app.Run();