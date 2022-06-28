import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from './base.timed.entity';
import { Document } from './document.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { User } from './user.entity';

@Entity({ name: 'driver_permits' })
export class DriverPermit extends SoftDeleteEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: Driver;

  @OneToOne(() => DriverGroup)
  @JoinColumn()
  public driverGroup: DriverGroup;

  @Column({ type: 'timestamptz', nullable: true })
  public startedAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public endedAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @Column()
  public expired: boolean;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'driver_permit_docs' })
  public docs!: Document[];
}
