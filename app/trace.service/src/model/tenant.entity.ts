import { TenantDomain } from './tenant.domain.entity';
import {
  Column,
  Entity,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'tenants' })
export class Tenant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @Column()
  public shortName: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  public created: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    nullable: true,
  })
  public updated!: Date;

  @DeleteDateColumn({
    type: 'timestamptz',
    nullable: true,
  })
  public deleted: Date;

  @Column({ type: 'boolean', default: false })
  public isArchived: boolean;

  @Column({ default: false })
  public active: boolean;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public key: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public language: string;

  @Column({ type: 'varchar', length: 1024, nullable: false })
  public logo: string;

  @Column({ type: 'varchar', length: 1024, nullable: false })
  public background: string;

  // TODO: Add enum filed for color
  // @Column()
  // public colors: Color;

  @OneToMany(() => TenantDomain, (domain) => domain.tenant)
  public domains: TenantDomain[];
}
