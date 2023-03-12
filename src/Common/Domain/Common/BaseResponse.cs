namespace Trace.Common.Domain.Common;

public abstract class BaseResponse<T> {
    protected BaseResponse() => Success = true;

    protected BaseResponse(string message) {
        Success = true;
        Message = message;
    }

    protected BaseResponse(string message, bool success) {
        Success = success;
        Message = message;
    }

    protected BaseResponse(T? data, string message = "") {
        Success = true;
        Message = message;
        Data = data;
    }

    public bool Success { get; set; }
    public string Message { get; set; } = null!;
    public List<string> Errors { get; set; } = null!;
    public T? Data { get; set; }
}