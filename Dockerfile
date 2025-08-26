# Multi-stage build for Angular application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better caching (from frontend directory)
COPY frontend/package*.json ./

# Install dependencies (including dev dependencies needed for build)
RUN npm ci --only=production=false

# Copy source code from frontend directory
COPY frontend/ .

# Build the application with production configuration
RUN npm run build -- --configuration=production

# Production stage with nginx
FROM nginx:alpine

# Copy built application from builder stage
COPY --from=builder /app/dist/chapadevs-website /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080 (Cloud Run requirement)
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
