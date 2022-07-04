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
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Customer } from '@/module/customer/entity/customer.entity';
import { CustomerGroup } from '@/module/customer/entity/customer.group.entity';
import { VehicleType } from '@/common/entity/enum.object';
import { RouteCostItem } from './route.cost-item.entity';
import { TrailerType } from '@root/libs/module/src/asset/entity/asset.trailer.type.entity';
import { User } from '@/module/user/entity/user.entity';
import { CustomerContract } from '@/module/customer/entity/customer.contract.entity';
import { Route } from './route.entity';

@Entity({ name: 'route_costs' })
export class RouteCost extends TagEntity {
  @Generated()
  @Column({ unique: true })
  public identifier!: number;

  @OneToOne(() => Route)
  @JoinColumn()
  public route: Route;

  @Column({ nullable: true })
  public routeId!: string;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public timeApproved: Date;

  @Column({ default: false })
  public autoApprove: boolean;

  @OneToMany(() => RouteCostItem, (item) => item.cost, { nullable: true })
  @JoinColumn()
  public costItems!: RouteCostItem[];

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
