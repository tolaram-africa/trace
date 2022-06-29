import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Currency } from '@/module/system/entity/currency.entity';
import { BankAccount } from './payment.bank-account.entity';
import { Document } from '@/module/document/entity/document.entity';

@Entity({ name: 'transaction_accounts' })
export class TransactionAccount extends SoftDeleteEntity {
  @Column({ default: true })
  public active: boolean;

  @Generated()
  @Column({ type: 'bigint', unique: true, nullable: false })
  public identifier: number;

  @OneToOne(() => BankAccount, { nullable: true })
  @JoinColumn()
  public bankAccount!: BankAccount;

  @Column({ type: 'bigint', nullable: false, default: 0 })
  public currentLoan: number;

  @Column({ type: 'bigint', nullable: false, default: 0 })
  public currentBalance: number;

  @Column({ type: 'timestamptz', nullable: true })
  public lastTransactionTime: Date;

  @OneToOne(() => Currency)
  @JoinColumn()
  public currency: Currency;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'transaction_account_docs' })
  public docs!: Document[];

  @Column({ type: 'text', nullable: true })
  public notes!: string;
}
