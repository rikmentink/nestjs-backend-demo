FROM node:22-bookworm-slim
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Build and generate Prisma client
RUN npm run build && ./node_modules/.bin/prisma generate

# SQLite will be stored here
RUN mkdir -p /data

ENV NODE_ENV=production
EXPOSE 3000

# Apply migrations on startup and run the app
CMD ["sh", "-c", "./node_modules/.bin/prisma migrate deploy --url \"$DATABASE_URL\" && node dist/main.js"]
