import { Entity } from 'typeorm';
import { Template } from './template.base.entity';

@Entity({ name: 'alert_templates' })
export class AlertTemplate extends Template {}
