import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { File } from '@/module/file/entity/file.entity';
import { ProductModel } from '@/module/product/entity/product.model.entity';
import { OrderRequest } from './order.request.entity';

@Entity({ name: 'order_freights' })
export class OrderFreight extends TagEntity {
  @ManyToOne(() => OrderRequest, (order) => order.freights)
  @JoinColumn()
  public orderRequest: OrderRequest;

  @Column({ nullable: true })
  public orderRequestId!: string;

  @Generated()
  @Column({ unique: true })
  public identifier!: number;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public waybillNo!: string;

  @OneToOne(() => ProductModel, { nullable: true })
  @JoinColumn()
  public product: ProductModel;

  @Column({ nullable: true })
  public productId!: string;

  @Column({ type: 'int', default: 1 })
  public size: number;

  @Column({ type: 'varchar', length: 256, nullable: true })
  public notes: string;

  @OneToOne(() => File, { nullable: true })
  @JoinColumn()
  public file!: File;

  @Column({ nullable: true })
  public fileId!: string;
}
