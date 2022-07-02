import { DeleteDateColumn } from 'typeorm';

export class TimeEmbed {
  @DeleteDateColumn({
    type: 'timestamptz',
    nullable: true,
  })
  public deleted!: Date;
}
