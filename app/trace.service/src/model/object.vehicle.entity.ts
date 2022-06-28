import {
  Column,
  JoinColumn,
  OneToOne,
  ManyToMany,
  Entity,
  JoinTable,
} from 'typeorm';
import { TagEntity } from './base.tagged.entity';
import { Beacon } from './beacon.entity';
import { VehicleType } from './enum.object';
import { Schedule } from './schedule.entity';
import { Document } from './document.entity';
import { Trailer } from './object.trailer.entity';
import { InsurancePlan } from './insurance.plan.entity';
import { ProductBrand } from './product.brand.entity';
import { StockOutRequest } from './stock.out-request.entity';

@Entity({ name: 'vehicles' })
export class Vehicle extends TagEntity {
  @Column({ default: false })
  public active: boolean;

  @Column()
  public name: string;

  @Column()
  public registrationId: string;

  @Column()
  public fleetId!: string;

  @Column({ type: 'enum', enum: VehicleType, default: VehicleType.CAR })
  public type: VehicleType;

  @OneToOne(() => StockOutRequest, { nullable: true })
  @JoinColumn()
  public assetRequest!: StockOutRequest;

  @Column()
  public color: string;

  @Column({ type: 'text', nullable: true })
  public picture: string;

  @Column({ type: 'bigint', default: 0 })
  public odometer: number;

  @Column()
  public fuelType: string;

  @Column({ type: 'int', default: 0 })
  public fuelCapacity: number;

  @Column({ type: 'int', default: 0 })
  public horsePower: number;

  public engineCapacity: number;

  @OneToOne(() => ProductBrand)
  @JoinColumn()
  public manufacturer: ProductBrand;

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

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'vehicle_docs' })
  public docs!: Document[];

  @ManyToMany(() => Schedule, { nullable: true })
  @JoinTable({ name: 'vehicle_schedules' })
  public schedules!: Schedule[];

  @OneToOne(() => Trailer)
  @JoinColumn()
  public activeTrailer!: Trailer;
}
