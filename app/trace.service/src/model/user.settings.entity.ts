import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { User } from './user.entity';

@Entity({ name: 'user_settings' })
export class UserSettings extends BaseTimedEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @Column()
  public apiKey!: string;

  @Column()
  public mapZoom!: number;

  @Column()
  public mapSelectionZoom!: number;

  @Column()
  public lon!: number;

  @Column()
  public lat!: number;

  @Column()
  public mapType!: string;

  @Column()
  public locale!: string;

  @Column()
  public timezone!: string;

  @Column()
  public Hour24Time!: boolean;

  @Column()
  public unitDistance!: string;

  @Column()
  public unitVolume!: string;

  @Column()
  public unitWeight!: string;

  @Column()
  public unitTemperature!: string;

  @Column()
  public unitTime!: string;

  @Column()
  public unitSpeed!: string;

  @Column()
  public unitFuel!: string;

  @Column()
  public unitPower!: string;

  @Column()
  public unitPressure!: string;

  @Column()
  public unitForce!: string;

  @Column()
  public unitTorque!: string;

  @Column()
  public unitAcceleration!: string;

  @Column()
  public unitAngle!: string;

  @Column()
  public unitArea!: string;
}
