import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { SoftDeleteEntity } from './base.soft-delete.entity';
import { StockOutRequest } from './stock.out-request.entity';
import { User } from './user.entity';

export enum StockOutType {
  FUEL = 'fuel',
  ASSET = 'asset',
  TRANSFER = 'transfer',
  OTHER = 'other',
}

@Entity({ name: 'stock_outs' })
export class StockOut extends SoftDeleteEntity {
  @Column({ type: 'enum', enum: StockOutType, nullable: false })
  public type: StockOutType;

  @OneToOne(() => StockOutRequest)
  @JoinColumn()
  public request: StockOutRequest;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;
}
