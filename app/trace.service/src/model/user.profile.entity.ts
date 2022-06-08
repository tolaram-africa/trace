import { IsEmail } from 'class-validator';
import { Column, Entity, OneToOne } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { User } from './user.entity';

@Entity({ name: 'user_profile' })
export class UserProfile extends BaseTimedEntity {
  @OneToOne(() => User, (user) => user.profile)
  public user: User;

  @Column({ type: 'varchar', length: 255 })
  public firstName: string;

  @Column({ type: 'varchar', length: 255 })
  public lastName: string;

  @Column({ type: 'varchar', length: 255 })
  @IsEmail()
  public email: string;

  @Column({ type: 'int' })
  public phone: number;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column()
  country: string;

  @Column({ type: 'varchar', length: 1024 })
  picture: string;

  @Column({ type: 'varchar', length: 1024 })
  avatar: string;
}
