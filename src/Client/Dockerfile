FROM mcr.microsoft.com/dotnet/aspnet:8.0-preview-alpine AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM node:18-alpine AS node

FROM mcr.microsoft.com/dotnet/sdk:8.0-preview-alpine AS build

# Import Node.js binaries
COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/share /usr/local/share
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin
RUN npm i -g pnpm npm @quasar/cli

WORKDIR /src
COPY . .
RUN dotnet restore "src/Client/Trace.Client.csproj"
WORKDIR "/src/src/Client"
RUN dotnet build "Trace.Client.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Trace.Client.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Trace.Client.dll"]
