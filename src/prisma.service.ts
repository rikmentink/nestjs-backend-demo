import { Injectable } from '@nestjs/common';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl?.trim()) {
      throw new Error('DATABASE_URL is not set');
    }

    const adapter = new PrismaBetterSqlite3({
      url: databaseUrl,
    });
    super({ adapter });
  }
}
