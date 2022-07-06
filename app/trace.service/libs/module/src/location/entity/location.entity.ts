import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { Point, Geometry, GeometryType } from '@trace/common';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { LocationAutoType } from '@/common/entity/enum.base';
import { LocationCategory } from './';
import { LocationType } from './location.enum';
import { User } from '@/module/user/entity/user.entity';

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
    srid: 4326,
    nullable: false,
  })
  public center: Point;

  @Column({
    type: 'jsonb',
    nullable: false,
  })
  public shape: Geometry;

  @Column({ type: 'jsonb', nullable: true })
  public metadata!: Record<string, unknown>;

  @Column({ type: 'text', nullable: true })
  public description!: string;
}
