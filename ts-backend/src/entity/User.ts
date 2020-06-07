import { Entity, Column } from 'typeorm';
import { BasicEntity } from './BasicEntity';

@Entity()
export class User extends BasicEntity {
    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column({ select: false })
    password: string;
}
