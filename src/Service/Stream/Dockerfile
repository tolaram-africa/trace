FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["src/Service/Track/Trace.Service.Stream.csproj", "src/Service/Track/"]
RUN dotnet restore "src/Service/Track/Trace.Service.Stream.csproj"
COPY . .
WORKDIR "/src/src/Service/Track"
RUN dotnet build "Trace.Service.Stream.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Trace.Service.Stream.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Trace.Service.Stream.dll"]
