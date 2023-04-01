FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["src/Service/Operation/Trace.Service.Operation.csproj", "src/Service/Operation/"]
COPY ["src/Common/Domain/Trace.Common.Domain.csproj", "src/Common/Domain/"]
COPY ["lib/src/entity/Proton.Common.Entity.csproj", "lib/src/entity/"]
COPY ["lib/src/standard/Proton.Common.Standard.csproj", "lib/src/standard/"]
COPY ["src/Common/Standard/Trace.Common.Standard.csproj", "src/Common/Standard/"]
COPY ["src/Common/Infrastructure/Trace.Common.Infrastructure.csproj", "src/Common/Infrastructure/"]
COPY ["src/Common/Service/Trace.Common.Service.csproj", "src/Common/Service/"]
RUN dotnet restore "src/Service/Operation/Trace.Service.Operation.csproj"
COPY . .
WORKDIR "/src/src/Service/Operation"
RUN dotnet build "Trace.Service.Operation.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Trace.Service.Operation.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Trace.Service.Operation.dll"]
