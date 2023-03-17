using Microsoft.EntityFrameworkCore;
using Trace.Common.Domain.Modules.Location.Entities;
using Trace.Common.Domain.Modules.Tag.Entities;
using Trace.Common.Domain.Modules.Tenant.Entities;

namespace Trace.Common.Infrastructure.Persistence.Context;

public class OperationContext : DbContext {
    public OperationContext(DbContextOptions<OperationContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder) {
        builder.ApplyConfigurationsFromAssembly(typeof(OperationContext).Assembly);
        base.OnModelCreating(builder);
    }

    public DbSet<Location> Locations { get; set; } = default!;
    public DbSet<LocationCategory> LocationCategories { get; set; } = default!;
    public DbSet<Tag> Tags { get; set; } = default!;
    public DbSet<Tenant> Tenants { get; set; } = default!;
}