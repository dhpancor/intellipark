import {
  Entity,
  Column,
  OneToMany, JoinColumn
} from 'typeorm';
import { Vehicle } from './Vehicle';
import { BasicEntity } from './BasicEntity';

@Entity()
export class Client extends BasicEntity {
  @Column({ name: 'first_name', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;

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
