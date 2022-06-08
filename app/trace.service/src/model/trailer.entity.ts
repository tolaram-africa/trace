import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Schedule } from './schedule.entity';
import { Document } from './document.entity';
import { TrailerType } from './trailer.type.entity';

@Entity({ name: 'trailers' })
export class Trailer extends BaseTaggedEntity {
  @Column()
  public active: boolean;

  @Column()
  public name: string;

  @Column()
  public tagId: string;

  @Column()
  public uniqueId: string;

  @OneToOne(() => TrailerType)
  @JoinColumn()
  public type: TrailerType;

  @Column({ type: 'timestamptz', nullable: true })
  public deployed!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public decommissioned!: Date;

  @ManyToMany(() => Document)
  @JoinTable()
  public docs!: Document[];

  @ManyToMany(() => Schedule)
  @JoinTable()
  public schedules!: Schedule[];
}
