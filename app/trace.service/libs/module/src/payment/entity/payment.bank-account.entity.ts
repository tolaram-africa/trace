import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { BankAccountType } from '@/common/entity/enum.base';
import { Bank } from '@/module/system/entity/system.bank.entity';
import { File } from '@root/libs/module/src/file/entity/file.entity';
import { ExtendedAddress } from '@/common/entity/base.address.entity';

@Entity({ name: 'bank_accounts' })
export class BankAccount extends SoftDeleteEntity {
  @OneToOne(() => Bank)
  @JoinColumn()
  public bank: Bank;

  @Column({ nullable: true })
  public bankId!: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  public bankBranch!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public bankSwift!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public bankIBAN!: string;

  @Column({ type: 'varchar', unique: true, length: 128, nullable: false })
  public number: string;

  @Column({
    type: 'enum',
    enum: BankAccountType,
    default: BankAccountType.SAVINGS,
    nullable: false,
  })
  public type: BankAccountType;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public routingNumber!: string;

  @Column({ type: 'varchar', length: 256, nullable: false })
  public holderFullName: string;

  @Column(() => ExtendedAddress)
  public address: ExtendedAddress;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'bank_aacount_files' })
  public files!: File[];
}
