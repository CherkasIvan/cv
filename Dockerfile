# Use Node image as base
FROM node:21-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build:ssr

# Use nginx image as base
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy application files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]