namespace Trace.Common.Domain.Common;

public interface IHasKey<T> {
    T Id { get; set; }
}