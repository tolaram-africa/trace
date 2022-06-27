import { Column, Entity, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { CoreTimeEntity } from './base.core-timed.entity';
import { IsEmail } from 'class-validator';
import { UserPassItem } from './user.pass-item.entity';

export enum UserMaritalStatus {
  SINGLE = 'single',
  MARRIED = 'married',
  DIVORCED = 'divorced',
  WIDOWED = 'widowed',
}

@Entity({ name: 'user_pass' })
export class UserPass extends CoreTimeEntity {
  @OneToOne(() => User, (user) => user.passport)
  public user: User;

  @Column({ type: 'date' })
  public birthDate!: Date;

  @Column({
    type: 'enum',
    enum: UserMaritalStatus,
    default: UserMaritalStatus.SINGLE,
  })
  public maritalStatus: UserMaritalStatus;

  @Column({ type: 'int', default: 0 })
  public numberOfChildren: number;

  @Column()
  public nextKinName!: string;

  @Column()
  public nextKinPhone!: number;

  @Column()
  @IsEmail()
  public nextKinEmail!: string;

  @Column()
  public gurantorName!: string;

  @Column()
  public gurantorPhone!: number;

  @Column()
  @IsEmail()
  public gurantorEmail!: string;

  @OneToMany(() => UserPassItem, (item) => item.userPass, { nullable: true })
  @JoinColumn()
  identityCards!: UserPassItem[];
}
