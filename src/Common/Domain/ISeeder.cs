using Microsoft.EntityFrameworkCore;

namespace Trace.Common.Domain;

public interface ISeeder {
    DateTimeOffset Time => DateTimeOffset.Now;
    ISeeder Initialize(ModelBuilder builder);
    void Run();
}