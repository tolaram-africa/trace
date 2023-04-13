// Copyright 2022 - 2023 Godwin peter .O (me@godwin.dev)
// 
// Licensed under the Reciprocal Public License (RPL-1.5) and Trace License;
// you may not use this file except in compliance with the License.
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

using Trace.Common.Domain.Context;
using Trace.Common.Domain.Modules.Beacon.Entities;

namespace Trace.Common.Domain.Modules.Beacon;

public class BeaconSeeder : DefaultSeeder {
    public override void Run() {
        Load(new List<BeaconDevice> {
            new BeaconDevice { Id = Guid.NewGuid(), CreatedAt = DateTimeOffset.Now,  SerialNumber = "12345", UniqueId = "12345" }
        });
    }
}