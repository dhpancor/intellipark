import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne
} from 'typeorm';
import { Client } from './Client';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  plate: string;

  @ManyToOne(() => Client, client => client.vehicles)
  client: Client;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn()
  deletedAt: string;
}
