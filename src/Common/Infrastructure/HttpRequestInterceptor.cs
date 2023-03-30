// Copyright 2022 - 2023 Godwin peter .O (me@godwin.dev)
// 
// Licensed under the Reciprocal Public License (RPL-1.5) and Trace License;
// you may not use this file except in compliance with the License.
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

using HotChocolate.AspNetCore;
using HotChocolate.Execution;
using Microsoft.AspNetCore.Http;

namespace Trace.Common.Infrastructure;

public class HttpRequestInterceptor : DefaultHttpRequestInterceptor {
    public override ValueTask OnCreateAsync(HttpContext context,
        IRequestExecutor requestExecutor, IQueryRequestBuilder requestBuilder,
        CancellationToken cancellationToken)
    {
        // string userId = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        // requestBuilder.SetProperty("UserId", userId);
        // requestBuilder.SetProperty("IntegerValue", int.Parse(userId));
        // requestBuilder.SetProperty("ObjectValue", new User { Id = userId });

        return base.OnCreateAsync(context, requestExecutor, requestBuilder,
            cancellationToken);
    }
}