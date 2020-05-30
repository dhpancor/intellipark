import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany
} from 'typeorm';
import { Vehicle } from './Vehicle';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

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
  vehicles: Vehicle[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn()
  deletedAt: string;
}
