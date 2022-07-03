import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity';
import { Currency } from '@/module/system/entity';
import { File } from '@root/libs/module/src/file/entity';
import { User } from '@/module/user/entity';

@Entity({ name: 'transaction_accounts' })
export class TransactionAccount extends SoftDeleteEntity {
  @Column({ default: true })
  public active: boolean;

  @Generated()
  @Column({ type: 'bigint', unique: true, nullable: false })
  public identifier: number;

  @OneToOne(() => User)
  @JoinColumn()
  public user!: User;

  @Column({ nullable: true })
  public userId!: string;

  @Column({ type: 'bigint', nullable: false, default: 0 })
  public currentLoan: number;

  @Column({ type: 'bigint', nullable: false, default: 0 })
  public currentBalance: number;

  @Column({ type: 'timestamptz', nullable: true })
  public lastTransactionTime: Date;

  @OneToOne(() => Currency)
  @JoinColumn()
  public currency: Currency;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'transaction_account_files' })
  public files!: File[];

  @Column({ type: 'text', nullable: true })
  public notes!: string;
}
