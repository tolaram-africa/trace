import { Column } from 'typeorm';

export class ExtendedAddress {
  @Column({ type: 'varchar', length: 1024, nullable: true })
  public line1!: string;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public line2!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public city!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public county!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public state!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public zip!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public country!: string;

  @Column({ type: 'bigint', nullable: true })
  public phone!: number;

  @Column({ type: 'varchar', length: 256, nullable: true })
  public email!: string;
}
