import { Column, Entity, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { TagEntity } from '@/common/entity';
import { DriverGroup } from '@/module/driver/entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'drivers' })
export class Driver extends TagEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @Column({ nullable: true })
  public userId!: string;

  @ManyToOne(() => DriverGroup, (group) => group.driver)
  @JoinColumn()
  public group: DriverGroup;

  @Column({ nullable: true })
  public groupId!: string;

  @Column({ type: 'varchar', nullable: true })
  public employmentId!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public barcode!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public employed!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public dismissed!: Date;
}
