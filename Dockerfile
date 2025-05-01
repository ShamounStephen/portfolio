# Use a specific Node.js version for reproducibility
FROM node:22.9.0

# Set working directory
WORKDIR /test

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml first to leverage caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install 

# Copy the rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["pnpm", "dev"]