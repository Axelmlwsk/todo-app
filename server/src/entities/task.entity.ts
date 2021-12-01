import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Folder } from './folder.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  title: string;
  @Column({ type: 'text', nullable: false })
  description: string;
  @Column({ type: 'boolean', nullable: false })
  done: boolean;
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => Folder, (folder: Folder) => folder.tasks, {
    onDelete: 'CASCADE',
  })
  folder: Folder;
}
