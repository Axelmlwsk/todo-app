import { CreateTaskDto } from './create-task.dto';
import { PartialType } from '@nestjs/mapped-types';

export class EditTaskDto extends PartialType(CreateTaskDto) {}
