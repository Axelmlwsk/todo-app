require('dotenv').config();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Folder } from './entities/folder.entity';

import { FoldersModule } from './folders/folders.module';

const { PORT, PASSWORD, DATABASE } = process.env;

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(PORT),
      username: 'postgres',
      password: PASSWORD,
      database: DATABASE,
      entities: [Task, Folder],
      synchronize: true,
    }),
    TasksModule,
    FoldersModule,
  ],
})
export class AppModule {}
