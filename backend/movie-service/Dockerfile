# ---------- Build Stage ----------
FROM maven:3.9.6-eclipse-temurin-17 AS builder

WORKDIR /app

# Copy pom first for dependency caching
COPY pom.xml .

# Download dependencies
RUN mvn dependency:go-offline

# Copy project source
COPY src ./src

# Build jar
RUN mvn clean package -DskipTests


# ---------- Runtime Stage ----------
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copy built jar
COPY --from=builder /app/target/*.jar app.jar

# Expose correct port
EXPOSE 8082

# Start application
ENTRYPOINT ["java", "-jar", "app.jar"]

