# ---------- Build Stage ----------
FROM maven:3.9.6-eclipse-temurin-17 AS builder

WORKDIR /app

# Copy pom.xml first
COPY pom.xml .

# Download dependencies
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Build jar
RUN mvn clean package -DskipTests


# ---------- Runtime Stage ----------
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copy built jar
COPY --from=builder /app/target/*.jar app.jar

# Eureka default port
EXPOSE 8761

# Run app
ENTRYPOINT ["java", "-jar", "app.jar"]

