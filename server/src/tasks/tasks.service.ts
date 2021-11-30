import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { EditTaskDto } from './dtos/edit-task.dto';

@Injectable()
export class TasksService {
  getTasks() {
    return { ok: 'getTasks' };
  }
  getTask(id: number) {
    return { ok: 'getTask' };
  }
  editTask(id: number, dto: EditTaskDto) {
    return { ok: 'editTask' };
  }
  deleteTask(id: number) {
    return { ok: 'deleteTask' };
  }
  createTask(dto: CreateTaskDto) {
    return { ok: 'createTask' };
  }
}
