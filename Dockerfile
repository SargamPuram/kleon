# Use a more recent Rust image to build the project
FROM rust:1.79 as builder

# Set the working directory
WORKDIR /usr/src/app/backend

# Copy the Cargo.toml and Cargo.lock files
COPY backend/Cargo.toml backend/Cargo.lock ./

# Create a dummy source file to cache dependencies
RUN mkdir src && echo "fn main() {}" > src/main.rs

# Build dependencies
RUN cargo build --release

# Remove the dummy source file
RUN rm -f target/release/deps/backend*

# Copy the rest of the source code
COPY backend ./

# Build the actual project
RUN cargo build --release

# Verify if the binary is created
RUN ls -la target/release/

# Use a base image with OpenSSL 3
FROM alpine:latest

# Install OpenSSL 3 and other required libraries
RUN apk add --no-cache openssl

# Copy the compiled binary from the builder stage
COPY --from=builder /usr/src/app/backend/target/release/backend /usr/local/bin/backend

# Set executable permissions
RUN chmod +x /usr/local/bin/backend

# Set the command to run your binary
CMD ["backend"]
