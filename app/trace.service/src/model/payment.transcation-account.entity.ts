import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { Currency } from './currency.entity';
import { BankAccount } from './paymeny.bank-account.entity';
import { Document } from './document.entity';
import { TagEntity } from '@/common/entity/base.tag.entity';

@Entity({ name: 'transaction_accounts' })
export class TransactionAccount extends TagEntity {
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
