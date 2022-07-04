import { Column, Entity, Generated, JoinColumn, OneToOne } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity';
import { DriverExpenseType } from './driver.expense-type.entity';
import { RouteCost } from '@/module/route/entity';
import { User } from '@/module/user/entity';

@Entity({ name: 'driver_expense_plans' })
export class DriverExpensePlan extends SoftDeleteEntity {
  @Generated()
  @Column({ unique: true })
  public identifier: number;

  @OneToOne(() => DriverExpenseType)
  public type: DriverExpenseType;

  @Column({ nullable: true })
  public typeId!: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @OneToOne(() => RouteCost)
  @JoinColumn()
  public routeCost!: RouteCost;

  @Column({ nullable: true })
  public routeCostId!: string;

  @Column({ type: 'int', nullable: true })
  public minTonnage!: number;

  @Column({ type: 'int', nullable: true })
  public maxTonnage!: number;

  @Column({ type: 'int', nullable: true })
  public rateByDistance!: number;

  @Column({ type: 'int', nullable: true })
  public rateManual!: number;

  @Column({ type: 'timestamptz', nullable: true })
  public timeApproved!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public timeRejected!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;
}
