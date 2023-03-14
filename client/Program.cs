using Trace.Client;

using var quasar = new NpmScript();
await quasar.RunAsync(Console.WriteLine);
Console.WriteLine(quasar.HasServer
                  ? $"From ASP.NET Core. Parcel is started ({quasar.HasServer}) @ {quasar.Url} at process: {quasar.ProcessId}"
                  : "Script has executed.");
await Task.Delay(TimeSpan.FromSeconds(4));
Console.ReadKey();
