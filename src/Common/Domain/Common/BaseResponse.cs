namespace Trace.Common.Domain.Common;

public class BaseResponse<T> {
    public BaseResponse() {
        Success = true;
    }

    public BaseResponse(string message) {
        Success = true;
        Message = message;
    }

    public BaseResponse(string message, bool success) {
        Success = success;
        Message = message;
    }

    public BaseResponse(T? data, string message = "") {
        Success = true;
        Message = message;
        Data = data;
    }

    public bool Success { get; set; }
    public string Message { get; set; }
    public List<string> Errors { get; set; }
    public T? Data { get; set; }
}