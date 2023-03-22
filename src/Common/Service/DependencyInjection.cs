using FluentValidation;
using Microsoft.Extensions.DependencyInjection;

namespace Trace.Common.Service;

public static class DependencyInjection {
    public static IServiceCollection RegisterService(this IServiceCollection services) {
        var assembly = typeof(DependencyInjection).Assembly;

        services.AddMediatR(config => config.RegisterServicesFromAssembly(assembly));
        services.AddValidatorsFromAssembly(assembly);

        return services;
    }
}