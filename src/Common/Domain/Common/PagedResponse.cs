namespace Trace.Common.Domain.Common;

public class PagedResponse<T> : BaseResponse<T> {
    public int Page { get; set; }
    public int PerPage { get; set; }
    public int Total { get; set; }

    public int TotalPages {
        get {
            var total = ((double)this.Total / this.PerPage);
            return Convert.ToInt32(Math.Ceiling(total));
        }
    }
}