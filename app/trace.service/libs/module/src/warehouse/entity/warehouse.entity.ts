import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { ExtendedAddress } from '@/common/entity/base.address.entity';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Customer } from '@/module/customer/entity/customer.entity';
import { AreaUnit } from '@/common/entity/enum.base';
import { Location } from '@/module/location/entity/location.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'warehouses' })
export class Warehouse extends TagEntity {
  @OneToOne(() => Location)
  @JoinColumn()
  public location: Location;

  @Column({ nullable: false })
  public locationId!: string;

  @OneToOne(() => User)
  @JoinColumn()
  public manager!: User;

  @Column({ nullable: false })
  public managerId!: string;

  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @Column({ type: 'enum', enum: AreaUnit, default: AreaUnit.SQUARE_METER })
  public capacityUnit: AreaUnit;

  @Column({ type: 'float', default: 0 })
  public capacity: number;

  @Column(() => ExtendedAddress)
  public address: ExtendedAddress;

  @ManyToMany(() => User, { nullable: true })
  @JoinTable({ name: 'warehouse_contacts' })
  public contacts!: User[];

  @ManyToMany(() => Customer, { nullable: true })
  @JoinTable({ name: 'warehouse_customers' })
  public customers!: Customer[];
}
