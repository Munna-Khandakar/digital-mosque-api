import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Mosque } from './Mosque';

@Entity({ name: 'notices' })
export class Notice {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  details: string;
  @Column()
  status: string;
  @Column()
  createdAt: Date;

  @ManyToOne(() => Mosque, (mosque) => mosque.notices)
  @JoinColumn()
  mosque: Mosque;
}
