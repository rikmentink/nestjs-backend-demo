import {
  ArgumentsHost,
  Catch,
  ConflictException,
  ExceptionFilter,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import type { Response } from 'express';

/**
 * Map Prisma errors to HTTP readable HTTP responses.
 * https://www.prisma.io/docs/orm/reference/error-reference
 */
@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    switch (exception.code) {
      case 'P2025': {
        // When a record is not found
        const err = new NotFoundException('Resource not found');
        return res.status(err.getStatus()).json(err.getResponse());
      }
      case 'P2002': {
        // When a unique constraint is violated (duplicate)
        const err = new ConflictException('Unique constraint violated');
        return res.status(err.getStatus()).json(err.getResponse());
      }
      default: {
        // Any other error
        return res.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Database request failed',
        });
      }
    }
  }
}
