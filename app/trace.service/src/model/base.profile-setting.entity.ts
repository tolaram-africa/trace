import { Point } from 'geojson';
import { Column } from 'typeorm';
import { CoreTimeEntity } from './base.core-timed.entity';
import { GeometryTransformer } from './base.util';

export abstract class BaseSetting extends CoreTimeEntity {
  @Column()
  public zoomInitial!: number;

  @Column()
  public zoomSelection!: number;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    transformer: new GeometryTransformer(),
    nullable: false,
  })
  public mapCenter: Point;

  @Column()
  public mapType!: string;

  @Column()
  public language!: string;

  @Column()
  public timezone!: string;

  @Column()
  public Hour24Time!: boolean;

  @Column()
  public unitDistance!: string;

  @Column()
  public unitVolume!: string;

  @Column()
  public unitWeight!: string;

  @Column()
  public unitTemperature!: string;

  @Column()
  public unitTime!: string;

  @Column()
  public unitSpeed!: string;

  @Column()
  public unitFuel!: string;

  @Column()
  public unitPower!: string;

  @Column()
  public unitPressure!: string;

  @Column()
  public unitForce!: string;

  @Column()
  public unitTorque!: string;

  @Column()
  public unitAcceleration!: string;

  @Column()
  public unitArea!: string;
}
