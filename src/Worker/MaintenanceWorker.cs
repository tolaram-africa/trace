namespace Trace.Worker;

public class MaintenanceWorker : BackgroundService {
    private readonly ILogger<MaintenanceWorker> _logger;

    public MaintenanceWorker(ILogger<MaintenanceWorker> logger) {
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken) {
        while (!stoppingToken.IsCancellationRequested) {
            _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
            await Task.Delay(TimeSpan.FromMinutes(5), stoppingToken);
        }
    }
}
