import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTicketDto): Promise<Ticket> {
    return this.prisma.ticket.create({ data });
  }

  findAll() {
    return this.prisma.ticket.findMany();
  }

  findOne(id: string) {
    return this.prisma.ticket.findUnique({ where: { id } });
  }

  update(id: string, updateTicketDto: UpdateTicketDto) {
    return this.prisma.ticket.update({ where: { id }, data: updateTicketDto });
  }

  remove(id: string) {
    return this.prisma.ticket.delete({ where: { id } });
  }
}
