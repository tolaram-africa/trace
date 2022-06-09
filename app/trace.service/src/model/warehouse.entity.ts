import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Customer } from './customer.entity';
import { AreaUnit } from './enum.base';
import { Location } from './location.entity';
import { User } from './user.entity';

@Entity({ name: 'warehouses' })
export class Warehouse extends BaseTaggedEntity {
  @ManyToMany(() => Customer)
  @JoinTable({ name: 'warehouse_customers' })
  public customers: Customer[];

  @OneToOne(() => Location)
  @JoinColumn()
  public location: Location;

  @OneToOne(() => User)
  @JoinColumn()
  public manager!: User;

  @ManyToMany(() => User)
  @JoinTable({ name: 'warehouse_contacts' })
  public contacts!: User[];

  @Column({ nullable: false })
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description: string;

  @Column({ type: 'enum', enum: AreaUnit, default: AreaUnit.SQUARE_METER })
  public capacityUnit: AreaUnit;

  @Column({ type: 'float', default: 0 })
  public capacity: number;
}
