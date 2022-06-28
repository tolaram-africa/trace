import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Column, Entity } from 'typeorm';

export enum PayProvider {
  PAYSTACK = 'paystack',
  INTERSWITCH = 'interswitch',
  FULTTERWAVE = 'fultterwave',
  PAGA = 'paga',
}

@Entity({ name: 'tenant_pay_providers' })
export class TenantPayProvider extends SoftDeleteEntity {
  @Column({
    type: 'enum',
    enum: PayProvider,
    default: PayProvider.PAYSTACK,
    nullable: false,
  })
  public provider: PayProvider;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public username!: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public secret: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public publicKey: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public privateKey: string;
}
