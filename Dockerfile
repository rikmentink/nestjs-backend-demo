FROM node:22-bookworm-slim
WORKDIR /app

# Prisma needs OpenSSL
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Build and generate Prisma client and build the application
RUN ./node_modules/.bin/prisma generate && npm run build

# SQLite will be stored here
RUN mkdir -p /data

ENV NODE_ENV=production
EXPOSE 3000

# Apply migrations on startup and run the app
CMD ["sh", "-c", "./node_modules/.bin/prisma migrate deploy && node dist/src/main.js"]
