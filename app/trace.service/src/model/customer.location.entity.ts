import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { User } from './user.entity';
import { Location } from './location.entity';

@Entity({ name: 'custs_locations' })
export class CustomerLocation extends BaseTaggedEntity {
  @Column({ type: 'varchar', length: 128, nullable: true })
  public label!: string;

  @OneToOne(() => User)
  @JoinColumn()
  public manager!: User;

  @ManyToMany(() => User)
  @JoinTable({ name: 'cust_contacts' })
  public contacts!: User[];

  @OneToOne(() => Location, { nullable: false })
  @JoinColumn()
  public location: Location;

  @Column({ type: 'text', nullable: true })
  public description!: string;
}
