import {
  Entity,
  Column,
  ManyToOne, OneToMany
} from 'typeorm';
import { Client } from './Client';
import { BasicEntity } from './BasicEntity';
import { AccessLog } from './AccessLog';

@Entity()
export class Vehicle extends BasicEntity {
  @Column({ nullable: false })
  plate: string;

  @ManyToOne(() => Client, client => client.vehicle)
  client: Client;

  @OneToMany(() => AccessLog, accessLog => accessLog.vehicle, {
    onDelete: 'CASCADE'
  })
  accessLogs: AccessLog[];
}
