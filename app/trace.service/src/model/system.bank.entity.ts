import { Column, Entity } from 'typeorm';
import { BaseAddress } from './base.address.entity';
import { SoftDeleteEntity } from './base.timed.entity';

@Entity({ name: 'bank_profiles' })
export class Bank extends SoftDeleteEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public name: string;

  @Column({ type: 'varchar', length: 128, unique: true, nullable: false })
  public routing: string;

  @Column(() => BaseAddress)
  public address: BaseAddress;
}
