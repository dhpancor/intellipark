import {
  Entity,
  Column,
  ManyToOne
} from 'typeorm';
import { BasicEntity } from './BasicEntity';
import { Vehicle } from './Vehicle';

@Entity()
export class AccessLog extends BasicEntity {
  @Column({ nullable: false })
  plate: string;

  @ManyToOne(() => Vehicle, vehicle => vehicle.accessLogs)
  vehicle: Vehicle;
}
