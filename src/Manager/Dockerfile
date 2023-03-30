FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["src/Manager/Trace.Service.Manage.csproj", "src/Manager/"]
COPY ["src/Common/Service/Trace.Common.Service.csproj", "src/Common/Service/"]
COPY ["src/Common/Standard/Trace.Common.Standard.csproj", "src/Common/Standard/"]
COPY ["lib/src/standard/Proton.Common.Standard.csproj", "lib/src/standard/"]
COPY ["src/Common/Infrastructure/Trace.Common.Infrastructure.csproj", "src/Common/Infrastructure/"]
COPY ["src/Common/Domain/Trace.Common.Domain.csproj", "src/Common/Domain/"]
COPY ["lib/src/entity/Proton.Common.Entity.csproj", "lib/src/entity/"]
RUN dotnet restore "src/Manager/Trace.Service.Manage.csproj"
COPY . .
WORKDIR "/src/src/Manager"
RUN dotnet build "Trace.Service.Manage.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Trace.Service.Manage.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Trace.Service.Manage.dll"]
