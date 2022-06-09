import { Customer } from './customer.entity';
import { User } from './user.entity';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { TicketMessage } from './ticket.message.entity';

@Entity({ name: 'tickets' })
export class Ticket extends BaseTaggedEntity {
  @OneToOne(() => Customer)
  @JoinColumn()
  public customer: Customer;

  @OneToOne(() => User)
  @JoinColumn()
  public resolvedBy: User;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public resolvedAt: Date;

  @Column({ default: false })
  public resolved: boolean;

  @Column({ type: 'text', nullable: true })
  public subject: string;

  @OneToMany(() => TicketMessage, (message) => message.ticket)
  @JoinColumn()
  public messages!: TicketMessage[];
}
