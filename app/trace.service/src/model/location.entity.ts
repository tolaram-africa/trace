import { Point, Geometry } from 'geojson';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { GeometryType, LocationAutoType } from './enum.base';
import { GeometryTransformer } from './base.util';
import { LocationType } from './location.type.entity';
import { User } from './user.entity';

// NOTE: https://github.com/typeorm/typeorm/issues/370
// TODO: Custom spec type for geometry column
// https://geoman.io/geojson-editor
// https://docs.microsoft.com/en-us/azure/azure-maps/extend-geojson
@Entity({ name: 'locations' })
export class Location extends BaseTaggedEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ default: true })
  public custom: boolean;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public name: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ type: 'timestamptz', nullable: true })
  public timeApproved!: Date;

  @OneToOne(() => LocationType, { nullable: false })
  @JoinColumn()
  public type: LocationType;

  @Column({
    type: 'enum',
    enum: LocationAutoType,
    default: LocationAutoType.CUSTOM,
  })
  public osmType: LocationAutoType;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public osmId: string;

  @Column({
    type: 'enum',
    enum: GeometryType,
    default: GeometryType.POINT,
    nullable: false,
  })
  public geometryType: GeometryType;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public address!: string;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    transformer: new GeometryTransformer(),
    nullable: false,
  })
  public center: Point;

  @Column({
    type: 'geometry',
    transformer: new GeometryTransformer(),
    nullable: false,
  })
  public shape: Geometry;

  @Column({ type: 'text', nullable: true })
  public description!: string;
}
