import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { Document } from './document.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';

@Entity({ name: 'driver_permits' })
export class DriverPermit extends BaseTimedEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: Driver;

  @OneToOne(() => DriverGroup)
  @JoinColumn()
  public driverGroup: DriverGroup;

  @Column({ type: 'timestamptz', nullable: true })
  public start!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public end!: Date;

  @Column({ type: 'varchar', nullable: true })
  public status: string;

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @Column()
  public expired: boolean;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'driver_permit_docs' })
  public docs!: Document[];
}
