import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get(':id')
  getTasks(@Param('id') id): {} {
    console.log(id);
    return 'Tasks';
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);
    return 'Task created';
  }

  @Put()
  updateTask(): string {
    return 'Task updated';
  }

  @Delete()
  deleteTask(): string {
    return 'Task deleted';
  }
}
