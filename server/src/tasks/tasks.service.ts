import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dtos/create-task.dto';
import { EditTaskDto } from './dtos/edit-task.dto';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

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
    const task = this.taskRepository.create(dto);
    return await this.taskRepository.save(task);
  }
}
