import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateFolderDto } from './dtos/create-folder.dto';
import { FoldersService } from './folders.service';

@Controller('folders')
export class FoldersController {
  constructor(private readonly foldersService: FoldersService) {}

  @Get()
  async getFolders() {
    const data = await this.foldersService.getFolders();
    return {
      message: 'correct request',
      data,
    };
  }

  @Get(':id')
  getFolder(@Param('id', ParseIntPipe) id: number) {
    return this.foldersService.getFolder(id);
  }

  @Post()
  createFolder(@Body() dto: CreateFolderDto) {
    return this.foldersService.createFolder(dto);
  }

  @Delete(':id')
  deleteFolder(@Param('id', ParseIntPipe) id: number) {
    return this.foldersService.deleteFolder(id);
  }
}
