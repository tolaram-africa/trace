import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { Point } from 'geojson';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { GeometryType, LocationAutoType } from '@/common/entity/enum.base';
import { LocationCategory } from './';
import { LocationType } from './location.enum';
import { User } from '@/module/user/entity/user.entity';
import {
  GeometryExtended,
  GeometryTransformer,
} from '@/common/entity/base.util';

// NOTE: https://github.com/typeorm/typeorm/issues/370
// TODO: Custom spec type for geometry column
// https://geoman.io/geojson-editor
// https://docs.microsoft.com/en-us/azure/azure-maps/extend-geojson
@Entity({ name: 'locations' })
export class Location extends TagEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ default: true })
  public custom: boolean;

  @Index('idx_location_name')
  @Column({ type: 'varchar', length: 128, nullable: false })
  public name: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ type: 'timestamptz', nullable: true })
  public timeApproved!: Date;

  @Index('idx_location_categoryid')
  @OneToOne(() => LocationCategory, { nullable: false })
  @JoinColumn()
  public category: LocationCategory;

  @Column({ nullable: true })
  public categoryId!: string;

  @Column({ type: 'enum', enum: LocationType, default: LocationType.LANDMARK })
  public type: LocationType;

  @Column({
    type: 'enum',
    enum: LocationAutoType,
    default: LocationAutoType.CUSTOM,
  })
  public osmType: LocationAutoType;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public osmId!: string;

  @Column({
    type: 'enum',
    enum: GeometryType,
    default: GeometryType.POINT,
    nullable: false,
  })
  public geometryType: GeometryType;

  @Index('idx_location_address')
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
  public shape: GeometryExtended;

  @Column({ type: 'jsonb', nullable: true })
  public metadata!: Record<string, unknown>;

  @Column({ type: 'text', nullable: true })
  public description!: string;
}
