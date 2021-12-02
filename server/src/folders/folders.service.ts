import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateFolderDto } from './dtos/create-folder.dto';
import { Folder } from 'src/entities/folder.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FoldersService {
  constructor(
    @InjectRepository(Folder)
    private readonly folderRepository: Repository<Folder>,
  ) {}

  async getFolders(): Promise<Folder[]> {
    return await this.folderRepository.find();
  }
  async getFolder(id: number) {
    const folder = await this.folderRepository.findOne(id);
    if (!folder) throw new NotFoundException();
    return folder;
  }

  async deleteFolder(id: number) {
    return await this.folderRepository.delete(id);
  }
  async createFolder(dto: CreateFolderDto) {
    console.log(dto);
    const folder = this.folderRepository.create(dto);
    return await this.folderRepository.save(folder);
  }
}
