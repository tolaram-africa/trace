FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["src/Service/Manager/Trace.Service.Manager.csproj", "src/Service/Manager/"]
RUN dotnet restore "src/Service/Manager/Trace.Service.Manager.csproj"
COPY . .
WORKDIR "/src/src/Service/Manager"
RUN dotnet build "Trace.Service.Manager.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Trace.Service.Manager.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Trace.Service.Manager.dll"]
