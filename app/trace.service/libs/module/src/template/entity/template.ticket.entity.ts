import { Entity } from 'typeorm';
import { MessageTemplate } from './template.base.entity';

@Entity({ name: 'ticket_message_templates' })
export class TicketTemplate extends MessageTemplate {}
