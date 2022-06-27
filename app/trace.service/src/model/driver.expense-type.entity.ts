import { Column, Entity, Generated } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'driver_expense_types' })
export class DriverExpenseType extends BaseTypeEntity {
  @Generated()
  @Column({ unique: true })
  public identifier!: number;
}
