import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { TicketFile } from './ticket.file.entity';
import { Ticket } from './ticket.entity';
import { User } from './user.entity';

@Entity({ name: 'ticket_messages' })
export class TicketMessage extends BaseTimedEntity {
  @Column({ nullable: false })
  public text: string;

  @ManyToOne(() => Ticket, (ticket) => ticket.messages)
  @JoinColumn()
  public ticket: Ticket;

  @OneToMany(() => TicketFile, (file) => file.message)
  @JoinColumn()
  public files: TicketFile[];

  @ManyToMany(() => User)
  @JoinTable({ name: 'ticket_msg_users' })
  public seenBy: User[];
}
