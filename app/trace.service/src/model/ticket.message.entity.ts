import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { Ticket } from './ticket.entity';
import { User } from './user.entity';
import { Document } from './document.entity';

@Entity({ name: 'ticket_messages' })
export class TicketMessage extends BaseTimedEntity {
  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public timeSent: Date;

  @Column({ nullable: false })
  public text: string;

  @ManyToOne(() => Ticket, (ticket) => ticket.messages)
  @JoinColumn()
  public ticket: Ticket;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'ticket_msg_docs' })
  public files: Document[];

  @ManyToMany(() => User)
  @JoinTable({ name: 'ticket_msg_users' })
  public seenBy: User[];
}
