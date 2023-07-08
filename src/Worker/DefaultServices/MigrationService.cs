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
using Trace.Common.Domain.Context;

namespace Trace.Worker.DefaultServices;

public class MigrationService(ILogger<MigrationService> logger, IServiceScopeFactory factory) : BackgroundService {
    private readonly ILogger<MigrationService> _logger = logger;
    private readonly OperationContext _context = factory.CreateScope().ServiceProvider.GetRequiredService<OperationContext>();

    protected override async Task ExecuteAsync(CancellationToken stoppingToken) {
        _logger.LogInformation("Starting migration...");
        await _context.Database.MigrateAsync(stoppingToken);
        _logger.LogInformation("Completed migration...");
    }
}