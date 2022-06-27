import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Order } from './order.entity';
import { Tag } from './tag.entity';
import { User } from './user.entity';
import { Document } from './document.entity';
import { Shipment } from './shipment.entity';

@Entity({ name: 'order_manifests' })
export class OrderManifest extends BaseEntity {
  @Generated()
  @Column({ unique: true })
  public identifier: number;

  @ManyToMany(() => Order, { nullable: true })
  @JoinTable({ name: 'order_manifest_items' })
  public orders!: Order[];

  @OneToOne(() => Shipment, { nullable: true })
  @JoinColumn()
  public shipment!: Shipment;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public sentBy!: User;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public sentAt!: Date;

  @OneToOne(() => Tag, { nullable: true })
  @JoinColumn()
  public sentTag!: Tag;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public recievedBy!: User;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public recievedAt!: Date;

  @OneToOne(() => Tag, { nullable: true })
  @JoinColumn()
  public recievedTag!: Tag;

  @Column({ type: 'varchar', nullable: true })
  public notes!: string;

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public docment!: Document;
}
