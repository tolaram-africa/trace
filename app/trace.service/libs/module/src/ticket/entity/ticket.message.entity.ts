import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Ticket } from './ticket.entity';
import { User } from '@/module/user/entity/user.entity';
import { File } from '@/module/file/entity/file.entity';

@Entity({ name: 'ticket_messages' })
export class TicketMessage extends SoftDeleteEntity {
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

  @Column({ nullable: true })
  public ticketId!: string;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'ticket_msg_files' })
  public files: File[];

  @ManyToMany(() => User)
  @JoinTable({ name: 'ticket_msg_users' })
  public seenBy: User[];
}
