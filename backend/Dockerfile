# Use the official Rust image as the base image with the latest version
FROM rust:latest AS builder

# Set the working directory inside the container
WORKDIR /usr/src/backend

# Copy the Cargo.toml and Cargo.lock files
COPY Cargo.toml Cargo.lock ./

# Create an empty main.rs file to trick Docker into creating a dummy build
RUN mkdir src && echo "fn main() {}" > src/main.rs

# Build the dependencies to cache them
RUN cargo build --release
RUN rm -f target/release/deps/backend*

# Copy the source code
COPY . .

# Build the project
RUN cargo build --release

# Use the latest Debian image for the runtime
FROM debian:latest

# Install required system packages including the correct version of OpenSSL
RUN apt-get update && apt-get install -y libssl-dev ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy the built binary from the builder image
COPY --from=builder /usr/src/backend/target/release/backend /usr/local/bin/backend

# Set environment variables
ENV RUST_LOG=info

# Expose the port your application runs on
EXPOSE 8080

# Run the binary
CMD ["backend"]



