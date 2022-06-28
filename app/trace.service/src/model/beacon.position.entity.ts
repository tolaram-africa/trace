import { Beacon } from './beacon.entity';
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { Point } from 'geojson';
import { GeometryTransformer } from './base.util';
import { TenantEntity } from './base.tenant.entity';

@Entity({ name: 'beacon_positions' })
export class BeaconPosition extends TenantEntity {
  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    transformer: new GeometryTransformer(),
    nullable: false,
  })
  public point: Point;

  @Column({ type: 'varchar', nullable: true, length: 1024 })
  public address!: string;

  @ManyToOne(() => Beacon, (beacon) => beacon.position, { nullable: false })
  @JoinColumn()
  public beacon: Beacon;

  @RelationId((position: BeaconPosition) => position.beacon)
  public beaconId!: string;

  @Column({ type: 'float', nullable: false })
  public speed: number;

  @Column({ type: 'float', nullable: false })
  public course: number;

  @Column({ type: 'float', nullable: false })
  public totalDistance: number;

  @Column({ type: 'float', nullable: false })
  public altitude: number;

  @Column({ type: 'float', nullable: false })
  public accuracy: number;

  @Column({ type: 'int', nullable: false })
  public satellites: number;

  @Column({ type: 'float', nullable: true })
  public fuel!: number;

  @Column({ type: 'float', nullable: true })
  public battery!: number;

  @Column({ default: true })
  public charging: boolean;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public time: Date;

  @Column({
    type: 'timestamptz',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public serverTime: Date;
}
