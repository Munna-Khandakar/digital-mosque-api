import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Notice } from './Notice';

@Entity({ name: 'mosques' })
export class Mosque {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => Notice, (notice) => notice.mosque)
  @JoinColumn()
  notices: Notice;
}
