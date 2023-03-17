using Microsoft.EntityFrameworkCore;
using Trace.Common.Domain.Modules.Tenant.Entities;

namespace Trace.Common.Infrastructure.Persistence.Context;

public class OperationContext : DbContext {
    public OperationContext(DbContextOptions<OperationContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder) {

        base.OnModelCreating(builder);
    }

    public DbSet<Tenant> Tenants { get; set; } = default!;
}