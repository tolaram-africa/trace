using System.Text.Json.Serialization;
using Axolotl.EFCore.Repository;
using Microsoft.AspNetCore.Http.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Steeltoe.Connector.PostgreSql;
using Steeltoe.Connector.RabbitMQ;
using Steeltoe.Messaging.RabbitMQ.Extensions;
using Trace.Common.Domain.Context;
using Trace.Common.Domain.Repository;

namespace Trace.Common.Infrastructure.Extensions;

public static class PersistenceExtensions {
    public static IServiceCollection RegisterSharedDataConnector(this IServiceCollection services) {
        var sp = services.BuildServiceProvider();
        var config = sp.GetService<IConfiguration>();
        services.AddRabbitMQConnection(config);
        services.AddPostgresConnection(config);
        services.AddPostgresHealthContributor(config);
        services.AddRabbitServices(true);
        services.AddRabbitAdmin();
        services.AddRabbitTemplate();
        services.AddDbContext<OperationContext>(options =>
        options.UseSnakeCaseNamingConvention()
        .UseNpgsql(config!.GetConnectionString("Postgres"),
            b => b
            .MigrationsAssembly(typeof(OperationContext).Assembly.FullName)
            .EnableRetryOnFailure(maxRetryCount: 15, maxRetryDelay: TimeSpan.FromSeconds(30), errorCodesToAdd: null)
            .UseNetTopologySuite()));

        services.AddScoped(typeof(IRepository<>), typeof(GenericRepository<>));
        services.AddScoped(typeof(IReadRepository<>), typeof(GenericRepository<>));
        services.Configure<JsonOptions>(options => {
            options.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
        });

        return services;
    }
}