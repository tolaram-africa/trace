import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity';
import { File } from '@/module/file/entity/file.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'driver_permits' })
export class DriverPermit extends SoftDeleteEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: Driver;

  @Column({ nullable: true })
  public driverId!: string;

  @OneToOne(() => DriverGroup)
  @JoinColumn()
  public driverGroup: DriverGroup;

  @Column({ nullable: true })
  public driverGroupId!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public startedAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public endedAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @Column()
  public expired: boolean;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'driver_permit_files' })
  public files!: File[];
}
