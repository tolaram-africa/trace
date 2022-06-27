import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { StockOutRequest } from './stock.out-request.entity';
import { User } from './user.entity';

export enum StockOutType {
  FUEL = 'fuel',
  ASSET = 'asset',
  TRANSFER = 'transfer',
  OTHER = 'other',
}

@Entity({ name: 'stock_outs' })
export class StockOut extends BaseTimedEntity {
  @Column({ type: 'enum', enum: StockOutType, nullable: false })
  public type: StockOutType;

  @OneToOne(() => StockOutRequest)
  @JoinColumn()
  public request: StockOutRequest;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;
}
