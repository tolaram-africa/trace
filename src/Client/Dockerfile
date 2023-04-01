FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y \
        nodejs \
    && curl -fsSL https://get.pnpm.io/install.sh | sh - \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /src
COPY ["src/Client/Trace.Client.csproj", "src/Client/"]
COPY ["src/Common/Infrastructure/Trace.Common.Infrastructure.csproj", "src/Common/Infrastructure/"]
COPY ["src/Common/Domain/Trace.Common.Domain.csproj", "src/Common/Domain/"]
COPY ["lib/src/entity/Proton.Common.Entity.csproj", "lib/src/entity/"]
COPY ["lib/src/standard/Proton.Common.Standard.csproj", "lib/src/standard/"]
COPY ["src/Common/Standard/Trace.Common.Standard.csproj", "src/Common/Standard/"]
RUN dotnet restore "src/Client/Trace.Client.csproj"
COPY . .
WORKDIR "/src/src/Client"
RUN dotnet build "Trace.Client.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Trace.Client.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Trace.Client.dll"]
