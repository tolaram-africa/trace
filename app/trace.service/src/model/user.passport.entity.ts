import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Document } from './document.entity';
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
  @ManyToOne(() => User, (user) => user.passport, { onDelete: 'CASCADE' })
  @JoinColumn()
  public user: User;

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
