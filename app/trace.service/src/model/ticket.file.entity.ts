import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { Ticket } from './ticket.entity';
import { TicketMessage } from './ticket.message.entity';

@Entity({ name: 'ticket_files' })
export class TicketFile extends BaseTimedEntity {
  @Column()
  public name: string;

  @ManyToOne(() => TicketMessage, (message) => message.files)
  @JoinColumn()
  public message: Ticket;

  @Column({ type: 'varchar', length: 1024 })
  public path: string;

  @Column({ nullable: true })
  public size: number;

  @Column({ nullable: true })
  public type: string;
}
