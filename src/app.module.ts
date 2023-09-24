import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mosque } from './typeorm/entities/Mosque';
import { Notice } from './typeorm/entities/Notice';
import { MosqueModule } from './mosque/mosque.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs_sql_tutorial',
      entities: [Mosque, Notice],
      synchronize: true,
    }),
    MosqueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
