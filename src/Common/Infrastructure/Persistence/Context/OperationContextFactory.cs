using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Trace.Common.Infrastructure.Persistence.Context;

public class OperationContextFactory : IDesignTimeDbContextFactory<OperationContext> {
    public OperationContext CreateDbContext(string[] args) {
        var optionsBuilder = new DbContextOptionsBuilder<OperationContext>();
        var config = new ConfigurationBuilder().Build();
        var connectionString = config.GetConnectionString("DefaultConnection");
        optionsBuilder.UseNpgsql(connectionString).UseSnakeCaseNamingConvention();

        return new OperationContext(optionsBuilder.Options);
    }
}