using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Steeltoe.Connector.PostgreSql;
using Trace.Common.Infrastructure.Persistence.Context;

namespace Trace.Common.Infrastructure.Extensions;

public static class PersistenceExtensions {
    public static IServiceCollection RegisterDataConnector(this IServiceCollection services, IConfiguration config) { ;
        services.AddPostgresConnection(config);
        var str = config.GetConnectionString("Postgres");
        services.AddDbContext<OperationContext>(options => options.UseNpgsql(config.GetConnectionString("Postgres")));
        services.AddPostgresHealthContributor(config);

        return services;
    }
}