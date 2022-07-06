import { Point } from '@trace/common';
import { Column } from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';

export abstract class BaseNavigationOption extends CoreDeleteEntity {
  @Column({ type: 'varchar', length: 64, nullable: true })
  public mapType!: string;

  @Column({ type: 'int', nullable: true })
  public zoom!: number;

  @Column({ type: 'int', nullable: true })
  public zoomSelection!: number;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  public mapCenter!: Point;

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
