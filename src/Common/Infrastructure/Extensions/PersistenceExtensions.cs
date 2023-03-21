using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Steeltoe.Connector.PostgreSql;
using Steeltoe.Connector.RabbitMQ;
using Steeltoe.Messaging.RabbitMQ.Extensions;
using Trace.Common.Infrastructure.Persistence.Context;

namespace Trace.Common.Infrastructure.Extensions;

public static class PersistenceExtensions {
    public static IServiceCollection RegisterSharedDataConnector(this IServiceCollection services) {
        var sp = services.BuildServiceProvider();
        var config = sp.GetService<IConfiguration>();
        services.AddRabbitMQConnection(config);
        services.AddPostgresConnection(config);
        services.AddDbContext<OperationContext>(options => options.UseNpgsql(config!.GetConnectionString("Postgres")));
        services.AddPostgresHealthContributor(config);
        services.AddRabbitServices(true);
        services.AddRabbitAdmin();
        services.AddRabbitTemplate();

        return services;
    }
}