import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { TagEntity } from './base.tag.entity';
import { User } from './user.entity';
import { Location } from './location.entity';

@Entity({ name: 'custs_locations' })
export class CustomerLocation extends TagEntity {
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
