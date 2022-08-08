import { Column, Entity } from 'typeorm';
import { ExtendedAddress } from '@/common/entity/base.address.entity';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';

@Entity({ name: 'bank_profiles' })
export class Bank extends SoftDeleteEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public name: string;

  @Column({ type: 'varchar', length: 128, unique: true, nullable: false })
  public routing: string;

  @Column(() => ExtendedAddress)
  public address: ExtendedAddress;
}
