import {
  Entity,
  Column,
  ManyToOne
} from 'typeorm';
import { Client } from './Client';
import { BasicEntity } from './BasicEntity';
import { AccessLog } from './AccessLog';

@Entity()
export class Vehicle extends BasicEntity {
  @Column({ nullable: false, unique: true })
  plate: string;

  @ManyToOne(() => Client, client => client.vehicles)
  client: Client;

  @ManyToOne(() => Client, client => client.vehicles)
  accesslogs: AccessLog[];
}
