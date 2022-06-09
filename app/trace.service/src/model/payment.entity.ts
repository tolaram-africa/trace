import {
  Column,
  Entity,
  OneToOne,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { UserType } from './enum.user';
import { User } from './user.entity';
import { Document } from './document.entity';
import { PaymentSettle } from './payment.settle.entity';

@Entity({ name: 'payment_types' })
export class PaymentType extends BaseTaggedEntity {
  @Column({ default: false })
  public default: boolean;

  @Column()
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @Column({
    type: 'enum',
    enum: UserType,
    default: [UserType.ALL],
    array: true,
  })
  public userTypes: UserType[];
}

@Entity({ name: 'payments' })
export class Payment extends BaseTaggedEntity {
  @OneToOne(() => PaymentType)
  public type: PaymentType;

  @Column({ default: false })
  public settled: boolean;

  @ManyToOne(() => PaymentSettle, (settle) => settle.payments)
  public settle: PaymentSettle;

  @Column({ type: 'int', default: 0 })
  public amount: number;

  @Column({ type: 'int', default: 0 })
  public pendingAmount: number;

  @ManyToMany(() => User)
  @JoinTable({ name: 'payment_users' })
  public users: User[];

  @ManyToMany(() => User)
  @JoinTable({ name: 'payment_docs' })
  public documents!: Document[];

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public time: Date;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public approvedTime: Date;
}
