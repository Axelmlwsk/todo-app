require('dotenv').config();

import { HostParam, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Folder } from './entities/folder.entity';

import { FoldersModule } from './folders/folders.module';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { HOST, PORT, USERNAME, PASSWORD, DATABASE } = process.env;

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: HOST,
      port: parseInt(PORT),
      username: USERNAME,
      password: PASSWORD,
      database: DATABASE,
      entities: [Task, Folder],
      synchronize: true,
      ssl: true,
    }),
    TasksModule,
    FoldersModule,
  ],
})
export class AppModule {}
