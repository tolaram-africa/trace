import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { User } from '@/module/user/entity/user.entity';
import { Document } from '@/module/document/entity/document.entity';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { JoinColumn } from 'typeorm';

export enum UserPassportType {
  BANK_ID = 'bank_id',
  SUB_CONTINENT_ID = 'sub_continent_id',
  NATIONAL_ID = 'national_id',
  IDENTITY_CARD = 'identity_card',
  PASSPORT = 'passport',
  DRIVING_LICENSE = 'driving_license',
  VEHICLE_REGISTRATION = 'vehicle_registration',
  VEHICLE_INSURANCE = 'vehicle_insurance',
}

@Entity({ name: 'user_passports' })
export class UserPassport extends CoreDeleteEntity {
  @Index('idx_user_passport_userid')
  @ManyToOne(() => User, (user) => user.passports, { onDelete: 'CASCADE' })
  @JoinColumn()
  public user: User;

  @Column({ nullable: true })
  public userId!: string;

  @Column({
    type: 'enum',
    enum: UserPassportType,
    default: UserPassportType.NATIONAL_ID,
  })
  public type!: UserPassportType;

  @Column({ nullable: true })
  public class!: string;

  @Column({ nullable: true })
  public uniqueId!: string;

  @Column({ nullable: true })
  public serialNo!: string;

  @Column({ type: 'date', nullable: true })
  public expiry!: Date;

  @Column({ type: 'date', nullable: true })
  public dateIssued!: Date;

  @Column({ nullable: true })
  public issuedBy!: string;

  @Column({ nullable: true })
  public issuedCountry!: string;

  @Column({ nullable: true })
  public issuedState!: string;

  @Column({ nullable: true })
  public issuedPlace!: string;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'user_passport_docs' })
  public docs!: Document[];
}
