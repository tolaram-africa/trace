using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Trace.Common.Infrastructure.Persistence.Context;

public class OperationContextFactory : IDesignTimeDbContextFactory<OperationContext> {
    public OperationContext CreateDbContext(string[] args) {
        var optionsBuilder = new DbContextOptionsBuilder<OperationContext>();
        optionsBuilder.UseSqlite("Data Source=blog.db");

        return new OperationContext(optionsBuilder.Options);
    }
}