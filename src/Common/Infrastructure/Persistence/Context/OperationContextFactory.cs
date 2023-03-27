using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Trace.Common.Infrastructure.Persistence.Context;

public class OperationContextFactory : IDesignTimeDbContextFactory<OperationContext> {
    public OperationContext CreateDbContext(string[] args) {
        var optionsBuilder = new DbContextOptionsBuilder<OperationContext>();
        var config = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json")
        .Build();
        var connectionString = config.GetConnectionString("DefaultConnection");
        optionsBuilder.UseNpgsql(connectionString,
            b => b
                .MigrationsAssembly(typeof(OperationContext).Assembly.FullName)
                .UseNetTopologySuite()
                .EnableRetryOnFailure())
                .UseSnakeCaseNamingConvention();

        return new OperationContext(optionsBuilder.Options);
    }
}