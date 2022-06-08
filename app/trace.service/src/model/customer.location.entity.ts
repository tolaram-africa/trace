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
  @Column()
  public name: string;

  @ManyToMany(() => User)
  @JoinTable()
  public users!: User[];

  @OneToOne(() => User)
  @JoinColumn()
  public manager!: User;

  @ManyToMany(() => User)
  @JoinTable()
  public contacts!: User[];

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @Column({ type: 'text' })
  public description: string;
}
