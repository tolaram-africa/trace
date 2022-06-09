import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Payment } from './payment.entity';
import { User } from './user.entity';
import { Document } from './document.entity';

@Entity({ name: 'pay_settle_types' })
export class PaymentSettleType extends BaseTaggedEntity {
  @Column({ default: false })
  public default: boolean;

  @Column()
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @Column({ default: true })
  public required: boolean;
}

@Entity({ name: 'pay_settlements' })
export class PaymentSettle extends BaseTaggedEntity {
  @OneToMany(() => Payment, (payment) => payment.settle)
  public payments: Payment[];

  @Column({ type: 'int', default: 0 })
  public amount: number;

  @Column({ default: true })
  public settled: boolean;

  @ManyToMany(() => User)
  @JoinTable({ name: 'pay_settle_users' })
  public users: User[];

  @ManyToMany(() => User)
  @JoinTable({ name: 'pay_settle_docs' })
  public documents!: Document[];

  @ManyToMany(() => PaymentSettleType)
  @JoinTable({ name: 'pay_settle_link_types' })
  public types: PaymentSettleType[];

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;
}
