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
using Trace.Common.Domain;
using Trace.Common.Domain.Common;
using Trace.Common.Domain.Modules;
using Trace.Common.Standard;

namespace Trace.Common.Infrastructure.Persistence.Context;

public sealed class OperationContext : BaseContext {
    public OperationContext() { }
    
    private static DbContextOptions<T> ChangeOptionsType<T>(DbContextOptions options) where T : DbContext 
        => (DbContextOptions<T>)options;
    
    public OperationContext(DbContextOptions<OperationContext> options) : base(ChangeOptionsType<OperationContext>(options)) { }
    
    public OperationContext(DbContextOptions options) : base(options) { }
    
    protected override void OnModelCreating(ModelBuilder builder) {
        // Apply entities configs
        builder.ApplyConfigurationsFromAssembly(typeof(CoreEntity<>).Assembly);
        
        // Apply Seeds for ISeeder
        foreach (var seed in FactoryLoader.Load<ISeeder>())
            seed.Initialize(builder).Run();
        
        base.OnModelCreating(builder);
    }
}