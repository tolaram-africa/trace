import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { User } from './user.entity';
import { Document } from './document.entity';
import { CoreTimeEntity } from './base.core-timed.entity';
import { UserPass } from './user.pass.entity';
import { JoinColumn } from 'typeorm';

export enum UserPassType {
  BANK_ID = 'bank_id',
  SUB_CONTINENT_ID = 'sub_continent_id',
  NATIONAL_ID = 'national_id',
  IDENTITY_CARD = 'identity_card',
  PASSPORT = 'passport',
  DRIVING_LICENSE = 'driving_license',
  VEHICLE_REGISTRATION = 'vehicle_registration',
  VEHICLE_INSURANCE = 'vehicle_insurance',
}

@Entity({ name: 'user_pass_items' })
export class UserPassItem extends CoreTimeEntity {
  @OneToOne(() => User, (user) => user.passport)
  public user: User;

  @ManyToOne(() => UserPass, (userPass) => userPass.identityCards)
  @JoinColumn()
  public userPass: UserPass;

  @Column({
    type: 'enum',
    enum: UserPassType,
    default: UserPassType.NATIONAL_ID,
  })
  public type!: UserPassType;

  @Column()
  public class!: string;

  @Column()
  public uniqueId!: string;

  @Column()
  public serialNo!: string;

  @Column({ type: 'date', nullable: true })
  public expiry!: Date;

  @Column({ type: 'date', nullable: true })
  public dateIssued!: Date;

  @Column()
  public issuedBy!: string;

  @Column()
  public issuedCountry!: string;

  @Column()
  public issuedState!: string;

  @Column()
  public issuedPlace!: string;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'user_pass_item_docs' })
  public docs!: Document[];
}
