import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { CoreTimeEntity } from './base.core-timed.entity';
import { User } from './user.entity';
import { Document } from './document.entity';
import { BaseAddress } from './base.address.entity';

@Entity({ name: 'user_profiles' })
export class UserProfile extends CoreTimeEntity {
  @OneToOne(() => User, (user) => user.profile, { nullable: false })
  @JoinColumn()
  public user: User;

  @Column({ type: 'varchar', length: 255 })
  public firstName: string;

  @Column({ type: 'varchar', length: 255 })
  public lastName: string;

  @Column(() => BaseAddress)
  public address: BaseAddress;

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public picture!: Document;

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public avatar!: Document;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'user_profile_docs' })
  public docs!: Document[];
}
