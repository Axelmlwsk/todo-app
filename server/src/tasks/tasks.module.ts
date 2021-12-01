import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';
import { FoldersService } from 'src/folders/folders.service';
import { Folder } from 'src/entities/folder.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    TypeOrmModule.forFeature([Folder]),
  ],
  controllers: [TasksController],
  providers: [TasksService, FoldersService],
})
export class TasksModule {}
