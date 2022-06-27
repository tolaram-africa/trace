import { BaseTaggedEntity } from './base.tagged.entity';
import { Document } from './document.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { ProductModel } from './product.model.entity';
import { OrderRequest } from './order.request.entity';

@Entity({ name: 'order_freights' })
export class OrderFreight extends BaseTaggedEntity {
  @ManyToOne(() => OrderRequest, (order) => order.freights)
  @JoinColumn()
  public orderRequest: OrderRequest;

  @Generated()
  @Column({ unique: true })
  public identifier: number;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public waybillNo!: string;

  @OneToOne(() => ProductModel, { nullable: true })
  @JoinColumn()
  public product: ProductModel;

  @Column({ type: 'int', default: 1 })
  public size: number;

  @Column({ type: 'varchar', length: 256, nullable: true })
  public notes: string;

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public document!: Document;
}
