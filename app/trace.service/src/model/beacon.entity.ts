import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { FuelCalculationType } from './enum.base';
import { Position } from './position.entity';

@Entity({ name: 'beacons' })
export class Beacon extends BaseTaggedEntity {
  @Column({ type: 'varchar', length: 255 })
  public uniqueId: string;

  @Column({ type: 'varchar', length: 255 })
  public name: string;

  @ManyToOne(() => Position)
  public position: Position;

  @RelationId((beacon: Beacon) => beacon.position)
  public positionId!: string;

  @Column({ type: 'varchar', length: 50 })
  public type: string;

  @Column({ type: 'varchar', length: 50 })
  public model: string;

  @Column({ type: 'varchar', length: 50 })
  public serialNumber: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  public version: string;

  @Column({ type: 'varchar', length: 50, default: 'offline' })
  public status: string;

  @Column({ type: 'text', nullable: true })
  public description?: string;

  @Column({ type: 'varchar', length: 255 })
  public manufacturer: string;

  @Column({ type: 'varchar', length: 1024 })
  public icon: string;

  @Column({ default: false })
  public fuel: boolean;

  @Column({
    type: 'enum',
    enum: FuelCalculationType,
    default: FuelCalculationType.PER_DISTANCE,
  })
  public fuelOption: FuelCalculationType;

  @Column({ type: 'decimal', default: 0 })
  public fuelDistanceValue!: number;

  @Column()
  public attributes: string;

  // networkSim: SimCard;
}
