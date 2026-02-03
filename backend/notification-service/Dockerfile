# ---------- Build Stage ----------
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

COPY . .
RUN dotnet publish -c Release -o /out

# ---------- Runtime Stage ----------
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app

COPY --from=build /out .

EXPOSE 7152

ENTRYPOINT ["dotnet", "notification-service.dll"]

