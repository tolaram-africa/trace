// Copyright 2022 - 2023 Godwin peter .O (me@godwin.dev)
// 
// Licensed under the Reciprocal Public License (RPL-1.5) and Trace License;
// you may not use this file except in compliance with the License.
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

using System.Globalization;
using Redis.OM;

namespace Trace.Worker.DefaultServices;

public class IndexCreationWorker : BackgroundService {
    private readonly RedisConnectionProvider _provider;
    private readonly ILogger<IndexCreationWorker> _logger;

    public IndexCreationWorker(RedisConnectionProvider provider, ILogger<IndexCreationWorker> logger) {
        _provider = provider;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken) {
        _logger.LogInformation($"Starting redis index creation...");
        var list = await _provider.Connection.ExecuteAsync("FT._LIST");
        var info = list.ToArray().Select(x => x.ToString(CultureInfo.InvariantCulture));
        var result = info.All(x => x != "tenant-idx");
        _logger.LogInformation($"Test index check : {result}");

        // TODO: Use per entity later
        // if (info.All(x => x != "person-idx")) {
        //     await _provider.Connection.CreateIndexAsync(typeof(Person));
        // }

        await Task.Delay(TimeSpan.FromSeconds(10), stoppingToken);
        _logger.LogInformation($"Completed redis index creation.");
    }
}