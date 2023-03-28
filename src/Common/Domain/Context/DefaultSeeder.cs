using Microsoft.EntityFrameworkCore;

namespace Trace.Common.Domain.Context;

public abstract class DefaultSeeder : ISeeder {
    protected ModelBuilder? Builder;

    public DateTimeOffset Time => DateTimeOffset.Now;

    public ISeeder Initialize(ModelBuilder builder) {
        Builder = builder;

        return this;
    }

    protected List<T> Load<T>(List<T> value) {
        Builder?.Entity<List<T>>().HasData(value);

        return value;
    }


    public void Run() { }
}