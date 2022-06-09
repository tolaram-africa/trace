import {
  OneToOne,
  JoinColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Customer } from './customer.entity';
import { CustomerGroup } from './customer.group.entity';
import { VehicleType } from './enum.vehicle';
import { RouteCostItem } from './route.cost-item.entity';
import { Route } from './route.entity';
import { TrailerType } from './trailer.type.entity';
import { User } from './user.entity';

@Entity({ name: 'route_costs' })
export class RouteCost extends BaseTaggedEntity {
  @OneToOne(() => Route)
  @JoinColumn()
  public route: Route;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public timeApproved: Date;

  @Column({ default: false })
  public autoApprove: boolean;

  @OneToMany(() => RouteCostItem, (item) => item.cost)
  public costItems: RouteCostItem[];

  @Column({
    type: 'enum',
    enum: VehicleType,
    array: true,
    default: [VehicleType.TRUCK],
    nullable: false,
  })
  public vehicleType: VehicleType;

  @ManyToMany(() => TrailerType)
  @JoinTable({ name: 'trailer_type_route_costs' })
  public trailerTypes: TrailerType[];

  @ManyToMany(() => CustomerGroup)
  @JoinTable({ name: 'cust_grp_route_costs' })
  public customerGroup!: CustomerGroup[];

  @ManyToMany(() => Customer)
  @JoinTable({ name: 'customer_route_costs' })
  public customer!: Customer[];
}
