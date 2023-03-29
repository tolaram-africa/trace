using System.Diagnostics;
using System.Text.RegularExpressions;

namespace Trace.Client;

public class NpmScript : IDisposable
{
  private readonly string _scriptName;

  private static readonly Regex Urls =
      new Regex(
          "(ht|f)tp(s?)\\:\\/\\/[0-9a-zA-Z]([-.\\w]*[0-9a-zA-Z])*(:(0-9)*)*(\\/?)([a-zA-Z0-9\\-\\.\\?\\,\\'\\/\\\\\\+&%\\$#_]*)?",
          RegexOptions.IgnoreCase | RegexOptions.Compiled);

  private Process? _process;
  public string Url { get; set; } = null!;
  public bool HasServer => !string.IsNullOrEmpty(Url);
  public int ProcessId => _process?.Id ?? 0;
  private readonly TaskCompletionSource<bool> _signal = new TaskCompletionSource<bool>(false);

  public NpmScript(string scriptName = "dev")
  {
    this._scriptName = scriptName;
  }

  public async Task RunAsync(Action<string>? output = null, int timeout = 2000)
  {
    var path = Directory.GetCurrentDirectory();
    var adjusted = Path.Combine(path, "../../..");
    Directory.SetCurrentDirectory(adjusted);
    var newPath = Directory.GetCurrentDirectory();

    lock (_signal)
    {
      if (_process == null)
      {
        var info = new ProcessStartInfo("npm")
        {
          RedirectStandardOutput = true,
          RedirectStandardError = true,
          Arguments = $"run {_scriptName}",
          UseShellExecute = false,
          WorkingDirectory = newPath
        };

        _process = Process.Start(info);
        _process!.EnableRaisingEvents = true;
        _process.BeginOutputReadLine();
        _process.BeginErrorReadLine();
        _process.OutputDataReceived += (sender, eventArgs) =>
        {
          output?.Invoke(eventArgs.Data!);

          if (!string.IsNullOrEmpty(eventArgs.Data) && string.IsNullOrEmpty(Url))
          {
            var results = Urls.Matches(eventArgs.Data);
            if (results.Any())
            {
              Url = results.First().Value;
              // _signal.SetResult(true);
            }
          }
        };

        _process.ErrorDataReceived += (sender, args) =>
        {
          output?.Invoke(args.Data!);
          if (!_signal.Task.IsCompleted)
          {
            _signal.SetException(new Exception("npm web server failed to start"));
          }
        };

        var cancellationTokenSource = new CancellationTokenSource(timeout);
        cancellationTokenSource.Token.Register(() =>
        {
          if (_signal.Task.IsCompleted)
            return;

          Url = string.Empty;
          _signal.SetResult(true);
        }, false);
      }
    }

    await _signal.Task;
  }

  public void Dispose()
  {
    _process?.Dispose();
  }
}
