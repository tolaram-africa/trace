import {
  Column,
  JoinColumn,
  OneToOne,
  ManyToMany,
  Entity,
  JoinTable,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Beacon } from '@/module/beacon/entity/beacon.entity';
import { VehicleType } from '@/common/entity/enum.object';
import { Schedule } from '@/module/schedule/entity/schedule.entity';
import { File } from '@/module/file/entity/file.entity';
import { Trailer } from './asset.trailer.entity';
import { InsurancePlan } from '@/module/insurance/entity/insurance.plan.entity';
import { ProductBrand } from '@/module/product/entity/product.brand.entity';
import { StockOutRequest } from '@/module/stock/entity/stock.out-request.entity';

@Entity({ name: 'vehicles' })
export class Vehicle extends TagEntity {
  @Column({ default: false })
  public active: boolean;

  @Column({ type: 'varchar', nullable: false })
  public name: string;

  @Column({ type: 'varchar', nullable: true })
  public registrationId!: string;

  @Column({ type: 'varchar', nullable: true })
  public fleetId!: string;

  @Column({ type: 'enum', enum: VehicleType, default: VehicleType.CAR })
  public type: VehicleType;

  @OneToOne(() => StockOutRequest, { nullable: true })
  @JoinColumn()
  public stock!: StockOutRequest;

  @Column({ nullable: true })
  public stockId!: string;

  @Column()
  public color: string;

  @OneToOne(() => File, { nullable: true })
  @JoinColumn()
  public image: File;

  @Column({ nullable: true })
  public imageId!: string;

  @Column({ type: 'bigint', default: 0 })
  public odometer: number;

  @Column()
  public fuelType: string;

  @Column({ type: 'int', default: 0 })
  public fuelCapacity: number;

  @Column({ type: 'int', default: 0 })
  public horsePower: number;

  public engineCapacity: number;

  @OneToOne(() => ProductBrand, { nullable: true })
  @JoinColumn()
  public manufacturer!: ProductBrand;

  @Column({ nullable: true })
  public manufacturerId!: string;

  @Column()
  public model: string;

  @Column({ type: 'int', nullable: true, default: 1999 })
  public yearManufactured: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  public tonnageCapacity: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  public axleTonnageCapacity: number;

  @Column()
  public uniqueId: string;

  @Column()
  public barcode: string;

  @Column({ type: 'timestamptz', nullable: true })
  public deployed!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public decommissioned!: Date;

  @OneToOne(() => Beacon, { nullable: true })
  @JoinColumn()
  public beacon!: Beacon;

  @ManyToMany(() => InsurancePlan, { nullable: true })
  @JoinTable({ name: 'vehicle_insurance_plans' })
  public insurance!: InsurancePlan[];

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'vehicle_files' })
  public docs!: File[];

  @ManyToMany(() => Schedule, { nullable: true })
  @JoinTable({ name: 'vehicle_schedules' })
  public schedules!: Schedule[];

  @OneToOne(() => Trailer, { nullable: true })
  @JoinColumn()
  public trailer!: Trailer;

  @Column({ nullable: true })
  public trailerId!: string;
}
