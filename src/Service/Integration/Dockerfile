FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["src/Service/Integration/Trace.Service.Integration.csproj", "src/Service/Integration/"]
RUN dotnet restore "src/Service/Integration/Trace.Service.Integration.csproj"
COPY . .
WORKDIR "/src/src/Service/Integration"
RUN dotnet build "Trace.Service.Integration.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Trace.Service.Integration.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Trace.Service.Integration.dll"]
