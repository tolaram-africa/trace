import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Schedule } from '@/module/schedule/entity/schedule.entity';
import { File } from '@root/libs/module/src/file/entity/file.entity';
import { TrailerType } from './asset.trailer.type.entity';
import { InsurancePlan } from '@/module/insurance/entity/insurance.plan.entity';
import { ProductBrand } from '@/module/product/entity/product.brand.entity';
import { StockOutRequest } from '@/module/stock/entity/stock.out-request.entity';

@Entity({ name: 'trailers' })
export class Trailer extends TagEntity {
  @Column()
  public active: boolean;

  @Column()
  public name: string;

  @Column()
  public barcode: string;

  @Column()
  public uniqueId: string;

  @OneToOne(() => TrailerType)
  @JoinColumn()
  public type: TrailerType;

  @OneToOne(() => StockOutRequest, { nullable: true })
  @JoinColumn()
  public assetRequest!: StockOutRequest;

  @Column()
  public color: string;

  @Column({ type: 'text', nullable: true })
  public picture: string;

  @Column({ type: 'bigint', default: 0 })
  public odometer: number;

  @Column({ type: 'int', default: 0 })
  public fuelCapacity: number;

  @OneToOne(() => ProductBrand)
  @JoinColumn()
  public manufacturer: ProductBrand;

  @Column({ type: 'int', nullable: true, default: 1999 })
  public yearManufactured: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  public tonnageCapacity: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  public axleTonnageCapacity: number;

  @Column({ type: 'timestamptz', nullable: true })
  public deployed!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public decommissioned!: Date;

  @ManyToMany(() => InsurancePlan)
  @JoinTable({ name: 'trailer_insurance_plans' })
  public insurance!: InsurancePlan[];

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'traler_files' })
  public files!: File[];

  @ManyToMany(() => Schedule, { nullable: true })
  @JoinTable({ name: 'trailer_schedules' })
  public schedules!: Schedule[];
}
