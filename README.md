# nestjs-backend-demo

Small NestJS + Prisma backend demo for learning TypeScript backend development.
Exposes a simple Tickets REST API backed by SQLite.
Focuses on clean structure (controllers/services), typing, and good defaults.

## What it does

- Simple REST API
- Basic controller/service structure
- Demonstrates backend concepts: routing, services, data handling

## Tech

- TypeScript
- NestJS
- Prisma
- Node.js
- Docker

## Why this project

I have backend experience in Python and wanted to translate those concepts to a TypeScript backend framework. This project focuses on structure and clarity rather than features.

## How to run

You can choose to run this app locally using the CLI (recommended for development) or using Docker (recommended for testing or production).

### Local

Configure your environment via `.env` (not committed). Start from the provided template:

```bash
cp .env.example .env

npm install

# Apply all existing migrations to your local database
./node_modules/.bin/prisma migrate deploy

npm run start:dev
```

When you change `prisma/schema.prisma`, create a new migration during development:

```bash
./node_modules/.bin/prisma migrate dev --name "<change>"
```

### Docker (Compose)

```bash
docker compose up --build
```

## Roadmap

- Production-grade foundation
  - Better request validation + consistent error responses
  - Testing: unit + integration + e2e, plus CI
  - Observability: structured logs, health checks, metrics/tracing
  - Deployment + ops: Docker/Compose, config management, migrations strategy
  - Project management: GitHub Project/Issues, technical documentation
- Feature expansion (vertical slices)
  - Users: agents + customers
  - Ticket assignment logic + status workflow
  - Messaging between customer ↔ agent
  - Analytics for helpdesk (e.g. created/closed counts, resolution times)

## Status

Learning project / demo
