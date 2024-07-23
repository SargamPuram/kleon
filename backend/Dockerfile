# Use the official Rust image as the build stage
FROM rust:latest as builder

# Set the working directory
WORKDIR /app

# Copy the manifest files
COPY Cargo.toml Cargo.lock ./

# This build step will cache dependencies
RUN cargo build --release
RUN rm src/*.rs

# Copy the source files
COPY src ./src

# Build the project
RUN cargo build --release

# Use a minimal base image for the runtime stage
FROM debian:buster-slim

# Install required dependencies
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the compiled binary from the builder stage
COPY --from=builder /app/target/release/kleon /usr/local/bin/kleon

# Copy the environment file if needed
COPY .env /usr/local/bin/

# Expose the application port
EXPOSE 8080

# Set the default port environment variable
ENV PORT=8080

# Run the application
CMD ["kleon"]

