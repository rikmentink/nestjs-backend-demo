import { Prisma, TicketPriority } from 'src/generated/prisma/client';

export class CreateTicketDto implements Pick<
  Prisma.TicketUncheckedCreateInput,
  'subject' | 'description' | 'priority' | 'customerId'
> {
  subject: string;
  description: string;
  priority: TicketPriority;
  customerId: string;
}
