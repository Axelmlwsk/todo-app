import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class Folder {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text', nullable: false })
  title: string;
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  @OneToMany(() => Task, (task: Task) => task.folder, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public tasks: Task[];
}
