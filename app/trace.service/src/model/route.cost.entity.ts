import {
  OneToOne,
  JoinColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  OneToMany,
  Generated,
} from 'typeorm';
import { TagEntity } from './base.tag.entity';
import { Customer } from './customer.entity';
import { CustomerGroup } from './customer.group.entity';
import { VehicleType } from './enum.object';
import { RouteCostItem } from './route.cost-item.entity';
import { Route } from './route.entity';
import { TrailerType } from './object.trailer.type.entity';
import { User } from './user.entity';
import { CustomerContract } from './customer.contract.entity';

@Entity({ name: 'route_costs' })
export class RouteCost extends TagEntity {
  @Generated()
  @Column({ unique: true })
  public identifier: number;

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
  @JoinColumn()
  public costItems: RouteCostItem[];

  @Column({
    type: 'enum',
    enum: VehicleType,
    array: true,
    default: [VehicleType.TRUCK],
    nullable: false,
  })
  public vehicleTypes: VehicleType[];

  @ManyToMany(() => TrailerType)
  @JoinTable({ name: 'route_cost_trailer_types' })
  public trailerTypes!: TrailerType[];

  @ManyToMany(() => Customer)
  @JoinTable({ name: 'route_cost_customers' })
  public customers!: Customer[];

  @ManyToMany(() => CustomerGroup)
  @JoinTable({ name: 'route_cost_cust_groups' })
  public customerGroups!: CustomerGroup[];

  @ManyToMany(() => CustomerContract)
  @JoinTable({ name: 'route_cost__contracts' })
  public contracts!: CustomerContract[];
}
