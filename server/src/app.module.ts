require('dotenv').config();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Folder } from './entities/folder.entity';

import { FoldersModule } from './folders/folders.module';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-184-73-25-2.compute-1.amazonaws.com',
      port: 5432,
      username: 'igprdpdkqaxlcd',
      password:
        'c33265d8dade206160d83e5338b99a5e4827c6c50bb088d9e69e871ef907d4a1',

      database: 'd22gfo68s8cio',
      entities: [Task, Folder],
      synchronize: true,
      ssl: true,
    }),
    TasksModule,
    FoldersModule,
  ],
})
export class AppModule {}
