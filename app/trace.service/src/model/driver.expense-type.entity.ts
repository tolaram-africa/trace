import { Column, Entity, Generated } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';

@Entity({ name: 'driver_expense_types' })
export class DriverExpenseType extends TypeEntity {
  @Generated()
  @Column({ unique: true })
  public identifier!: number;
}
