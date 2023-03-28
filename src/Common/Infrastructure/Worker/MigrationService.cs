// Copyright 2022 - 2023 Godwin peter .O (me@godwin.dev)
// 
// Licensed under the Reciprocal Public License (RPL-1.5) and Trace License;
// you may not use this file except in compliance with the License.
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Trace.Common.Domain.Context;

namespace Trace.Common.Infrastructure.Worker;

public class MigrationService : IHostedService {
    private readonly ILogger<MigrationService> _logger;
    private readonly OperationContext _context;

    public MigrationService(ILogger<MigrationService> logger, IServiceScopeFactory factory) {
        _logger = logger;
        _context = factory.CreateScope().ServiceProvider.GetRequiredService<OperationContext>();
    }

    public Task StartAsync(CancellationToken cancellationToken) {
        _logger.LogInformation("Starting migration...");
        _context.Database.Migrate();
        _logger.LogInformation("Completed migration...");
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken) {
        return Task.CompletedTask;
    }
}