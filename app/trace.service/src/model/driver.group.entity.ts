import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Driver } from './driver.entity';
import { User } from './user.entity';

@Entity({ name: 'driver_groups' })
export class DriverGroup extends BaseTaggedEntity {
  @Column()
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @OneToMany(() => Driver, (driver) => driver.group)
  public driver: Driver[];

  @Column({ type: 'int', default: 0 })
  public balance: number;

  @OneToOne(() => User)
  @JoinColumn()
  public manager!: User;

  @ManyToMany(() => User)
  @JoinTable({ name: 'driver_supervisors' })
  public supervisors: User[];

  // public accounts: BankAccounts[];
}
