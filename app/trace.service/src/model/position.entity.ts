import { Beacon } from './beacon.entity';
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Point } from 'geojson';
import { GeometryTransformer } from './base.util';

@Entity({ name: 'positions' })
export class Position extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'boolean', default: false })
  public isArchived: boolean;

  @Index({ spatial: true })
  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    transformer: new GeometryTransformer(),
    nullable: false,
  })
  public point: Point;

  @Column({ type: 'double precision', nullable: false })
  public lat: number;

  @Column({ type: 'double precision', nullable: false })
  public lon: number;

  @Column({ type: 'text', nullable: true })
  public address!: string;

  @ManyToOne(() => Beacon)
  public beacon!: Beacon;

  @RelationId((position: Position) => position.beacon)
  public beaconId!: string;

  @Column({ type: 'decimal', nullable: false })
  public speed: number;

  @Column({ type: 'float', nullable: false })
  public course: number;

  @Column({ type: 'float', nullable: false })
  public altitude: number;

  @Column({ type: 'float', nullable: false })
  public accuracy: number;

  @Column({ type: 'int', nullable: false })
  public satellites: number;

  @Column({ type: 'float', nullable: false })
  public fuel?: number;

  @Column({ type: 'float', nullable: false })
  public battery: number;

  @Column({ default: true })
  public charging: boolean;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public beaconTime: Date;

  @Column({
    type: 'timestamptz',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public serverTime: Date;
}
