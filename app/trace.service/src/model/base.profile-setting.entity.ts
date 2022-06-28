import { Point } from 'geojson';
import { Column } from 'typeorm';
import { CoreDeleteEntity } from './base.core.soft-delete.entity';
import { GeometryTransformer } from './base.util';

export abstract class BaseSetting extends CoreDeleteEntity {
  @Column({ type: 'int' })
  public zoomInitial!: number;

  @Column({ type: 'int' })
  public zoomSelection!: number;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    transformer: new GeometryTransformer(),
    nullable: true,
  })
  public mapCenter!: Point;

  @Column({ type: 'varchar', length: 64 })
  public mapType!: string;

  @Column({ type: 'varchar', length: 64 })
  public language!: string;

  @Column({ type: 'varchar', length: 64 })
  public timezone!: string;

  @Column({ default: true })
  public Hour24Time!: boolean;

  @Column({ type: 'varchar', length: 64 })
  public unitDistance!: string;

  @Column({ type: 'varchar', length: 64 })
  public unitVolume!: string;

  @Column({ type: 'varchar', length: 64 })
  public unitWeight!: string;

  @Column({ type: 'varchar', length: 64 })
  public unitTemperature!: string;

  @Column({ type: 'varchar', length: 64 })
  public unitSpeed!: string;

  @Column({ type: 'varchar', length: 64 })
  public unitFuel!: string;

  @Column({ type: 'varchar', length: 64 })
  public unitPower!: string;

  @Column({ type: 'varchar', length: 64 })
  public unitPressure!: string;

  @Column({ type: 'varchar', length: 64 })
  public unitForce!: string;

  @Column({ type: 'varchar', length: 64 })
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
