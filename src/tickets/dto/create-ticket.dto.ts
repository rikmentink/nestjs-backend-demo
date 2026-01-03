import { Prisma, TicketPriority } from '@prisma/client';

export class CreateTicketDto implements Pick<
  Prisma.TicketUncheckedCreateInput,
  'subject' | 'description' | 'priority' | 'customerId'
> {
  subject: string;
  description: string;
  priority: TicketPriority;
  customerId: string;
}
