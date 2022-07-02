import { Point } from 'geojson';
import { Column } from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { GeometryTransformer } from '@/common/entity/base.util';

export abstract class BaseSetting extends CoreDeleteEntity {
  @Column({ type: 'int', nullable: true })
  public zoomInitial!: number;

  @Column({ type: 'int', nullable: true })
  public zoomSelection!: number;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    transformer: new GeometryTransformer(),
    nullable: true,
  })
  public mapCenter!: Point;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public mapType!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public language!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public timezone!: string;

  @Column({ default: true })
  public Hour24Time!: boolean;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitDistance!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitVolume!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitWeight!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitTemperature!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitSpeed!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitFuel!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitPower!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitPressure!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitForce!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitArea!: string;

  @Column({ default: true })
  public enableTrip!: boolean;

  @Column({ default: false })
  public autoRoute!: boolean;

  @Column({ default: false })
  public autoOrder!: boolean;

  @Column({ default: false })
  public autoRouteCost!: boolean;

  @Column({ default: false })
  public autoInvoice!: boolean;

  @Column({ default: false })
  public verifyOTP!: boolean;

  @Column({ default: false })
  public autoZoneOTP!: boolean;
}
