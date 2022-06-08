import { Point, Geometry } from 'geojson';
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { GeometryType, LocationAutoType } from './enum.base';
import { GeometryTransformer } from './base.util';
import { LocationType } from './location.type.entity';

// NOTE: https://github.com/typeorm/typeorm/issues/370
@Entity({ name: 'locations' })
export class Location extends BaseTaggedEntity {
  @Column()
  public name: string;

  @Column({ type: 'text' })
  public description: string;

  @Column({ default: false })
  public default: boolean;

  @Column({ default: true })
  public custom: boolean;

  @OneToOne(() => LocationType)
  @JoinColumn()
  public type: LocationType;

  @Column({
    type: 'enum',
    enum: LocationAutoType,
    default: LocationAutoType.CUSTOM,
  })
  public osmType: LocationAutoType;

  @Column({
    type: 'enum',
    enum: GeometryType,
    default: GeometryType.POINT,
    nullable: false,
  })
  public geometryType: GeometryType;

  @Column({ type: 'text', nullable: true })
  public address: string;

  @Index({ spatial: true })
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
}
