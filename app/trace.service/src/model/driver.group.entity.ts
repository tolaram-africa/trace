import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { TagEntity } from './base.tag.entity';
import { Driver } from './driver.entity';
import { BankAccount } from './paymeny.bank-account.entity';
import { User } from './user.entity';
import { TransactionAccount } from './payment.transcation-account.entity';

@Entity({ name: 'driver_groups' })
export class DriverGroup extends TagEntity {
  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @OneToMany(() => Driver, (driver) => driver.group, { nullable: true })
  @JoinColumn()
  public driver!: Driver[];

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public manager!: User;

  @ManyToMany(() => User, { nullable: true })
  @JoinTable({ name: 'driver_supervisors' })
  public supervisors!: User[];

  @OneToOne(() => TransactionAccount, { nullable: true })
  @JoinColumn()
  public accountBalance!: TransactionAccount;

  @ManyToMany(() => BankAccount, { nullable: true })
  @JoinTable({ name: 'drv_group_bank_accounts' })
  public bankAccounts!: BankAccount[];
}
