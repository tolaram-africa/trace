import { Entity } from 'typeorm';
import { MessageTemplate } from './template.base.entity';

@Entity({ name: 'alert_templates' })
export class AlertTemplate extends MessageTemplate {}
