# Use the official Rust image as the build stage
FROM rust:latest as builder

# Set the working directory to /backend
WORKDIR /backend

# Copy the Cargo.toml and Cargo.lock files to the working directory
COPY backend/Cargo.toml backend/Cargo.lock ./

# Build the dependencies to cache them
RUN cargo build --release
RUN rm src/*.rs

# Copy the source files
COPY backend/src ./src

# Build the project
RUN cargo build --release

# Use a minimal base image for the runtime stage
FROM debian:buster-slim

# Install required dependencies
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

# Set the working directory to /backend
WORKDIR /backend

# Copy the compiled binary from the builder stage
COPY --from=builder /backend/target/release/kleon /usr/local/bin/kleon

# Copy the environment file if needed
COPY backend/.env /usr/local/bin/

# Expose the application port
EXPOSE 8080

# Set the default port environment variable
ENV PORT=8080

# Run the application
CMD ["kleon"]


