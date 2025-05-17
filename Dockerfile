# Use Node.js v20 as base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port (matches your application port)
EXPOSE 8080

# Start the application
CMD ["node", "index.js"]