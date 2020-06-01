/* eslint-disable camelcase */
import {
  Entity,
  Column,
  OneToMany
} from 'typeorm';
import { Vehicle } from './Vehicle';
import { BasicEntity } from './BasicEntity';

@Entity()
export class Client extends BasicEntity {
  @Column({ nullable: false })
  first_name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, unique: true })
  dni: string;

  @Column({ type: 'enum', enum: ['Male', 'Female', 'Other'], nullable: false })
  gender: string;

  @Column({ nullable: true })
  comments: string;

  @OneToMany(() => Vehicle, vehicle => vehicle.client)
  vehicle: Vehicle[];
}
