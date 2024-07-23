# Use the official Rust image as a builder
FROM rust:latest as builder

# Create a new empty shell project
RUN USER=root cargo new --bin kleon
WORKDIR /kleon

# Copy our manifests
COPY ./Cargo.toml ./Cargo.toml
COPY ./Cargo.lock ./Cargo.lock

# This build step will cache dependencies
RUN cargo build --release
RUN rm src/*.rs

# Copy source tree
COPY ./src ./src

# Build for release
RUN rm ./target/release/deps/kleon*
RUN cargo build --release

# Use the official Rust image as a runtime base image
FROM debian:buster-slim

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy the build artifact from the builder stage
COPY --from=builder /kleon/target/release/kleon /usr/local/bin/kleon

# Copy the environment variable file
COPY .env /usr/local/bin/

# Expose the port that the application runs on
EXPOSE 8080

# Set the default PORT environment variable
ENV PORT=8080

# Run the binary
CMD ["kleon"]
