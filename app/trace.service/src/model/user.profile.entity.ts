import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { User } from './user.entity';
import { Document } from './document.entity';
import { ExtendedAddress } from '@/common/entity/base.address.entity';

export enum UserMaritalStatus {
  SINGLE = 'single',
  MARRIED = 'married',
  DIVORCED = 'divorced',
  WIDOWED = 'widowed',
}

export enum UserGender {
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other',
  UNSPECIFIED = 'unspecified',
}

@Entity({ name: 'user_profiles' })
export class UserProfile extends CoreDeleteEntity {
  @OneToOne(() => User, (user) => user.profile, { nullable: false })
  @JoinColumn()
  public user: User;

  @Column(() => ExtendedAddress)
  public address: ExtendedAddress;

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public picture!: Document;

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public avatar!: Document;

  @Column({ type: 'date', nullable: true })
  public birthDate!: Date;

  @Column({
    type: 'enum',
    enum: UserGender,
    default: UserGender.UNSPECIFIED,
  })
  public gender: UserGender;

  @Column({
    type: 'enum',
    enum: UserMaritalStatus,
    default: UserMaritalStatus.SINGLE,
  })
  public maritalStatus: UserMaritalStatus;

  @Column({ type: 'int', default: 0 })
  public numberOfChildren: number;

  @Column({ nullable: true })
  public nextKinName!: string;

  @Column({ type: 'bigint', default: 0 })
  public nextKinPhone!: number;

  @Column({ nullable: true })
  public nextKinEmail!: string;

  @Column({ nullable: true })
  public gurantorName!: string;

  @Column({ type: 'bigint', default: 0 })
  public gurantorPhone!: number;

  @Column({ nullable: true })
  public gurantorEmail!: string;
}
