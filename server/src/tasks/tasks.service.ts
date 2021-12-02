import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import { CreateTaskDto } from './dtos/create-task.dto';
import { EditTaskDto } from './dtos/edit-task.dto';
import { Task } from 'src/entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Folder } from 'src/entities/folder.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  folderRepository = getRepository(Folder);

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }
  async getTask(id: number) {
    const task = await this.taskRepository.findOne(id);
    if (!task) throw new NotFoundException();
    return task;
  }
  async editTask(id: number, dto: EditTaskDto) {
    const task = await this.taskRepository.findOne(id);
    if (!task) throw new NotFoundException();
    const editedTask = Object.assign(task, dto);
    return await this.taskRepository.save(editedTask);
  }
  async deleteTask(id: number) {
    return await this.taskRepository.delete(id);
  }
  async createTask(dto: CreateTaskDto) {
    const { title, description, done, folderName } = dto;

    const task = this.taskRepository.create({ title, description, done });
    const folder = await this.folderRepository.findOne({
      title: dto.folderName,
    });
    if (folder) {
      task.folder = folder;
    } else {
      const folder = this.folderRepository.create({
        title: folderName,
      });
      await this.folderRepository.save(folder);
      task.folder = folder;
    }
    return await this.taskRepository.save(task);
  }
}
