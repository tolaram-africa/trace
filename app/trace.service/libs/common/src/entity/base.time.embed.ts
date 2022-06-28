import { DeleteDateColumn } from 'typeorm';

export class TimeEmbed {
  @DeleteDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  public deleted!: Date;
}
