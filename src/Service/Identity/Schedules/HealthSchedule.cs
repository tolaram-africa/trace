namespace Trace.Service.Identity.Schedules;

public class HealthSchedule : IHostedService, IDisposable {
    private readonly ILogger<HealthSchedule> _logger;
    private Timer? _timer;
    public HealthSchedule(ILogger<HealthSchedule> logger) => _logger = logger;

    private void DoWork(object? state) {
        _logger.LogInformation("Health daemon service...");
    }

    public Task StartAsync(CancellationToken cancellationToken) {
        _logger.LogInformation("Health daemon Service running...");

        _timer = new Timer(DoWork, null, TimeSpan.Zero,
            TimeSpan.FromSeconds(30));

        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken) {
        _logger.LogInformation("Health daemon Service is stopping.");

        _timer?.Change(Timeout.Infinite, 0);

        return Task.CompletedTask;
    }

    public void Dispose() => _timer?.Dispose();
}