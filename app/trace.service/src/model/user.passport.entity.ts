import { Column, Entity, JoinTable, ManyToMany, OneToOne } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { User } from './user.entity';
import { Document } from './document.entity';

@Entity({ name: 'user_ids' })
export class UserPassport extends BaseTimedEntity {
  @OneToOne(() => User, (user) => user.passport)
  public user: User;

  @ManyToMany(() => Document)
  @JoinTable()
  public docs!: Document[];

  @Column()
  public DOB!: Date;

  @Column()
  public NIN!: string;

  @Column()
  public ECOWAS!: string;

  @Column()
  public BVN!: string;

  @Column()
  public License!: string;

  @Column()
  public LicenseState!: string;

  @Column()
  public LicenseExpiration!: Date;

  @Column()
  public LicenseIssued!: Date;

  @Column()
  public LicenseClass!: string;

  @Column()
  public passport!: string;

  @Column()
  public passportExpiry!: Date;

  @Column()
  public passportIssued!: Date;

  @Column()
  public passportIssuedBy!: string;

  @Column()
  public passportIssuedPlace!: string;
}
