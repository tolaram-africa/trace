namespace Trace.Common.Domain.Permission;

public interface IPermissionTemplate {
    IEnumerable<PermissionItem> Result();
}