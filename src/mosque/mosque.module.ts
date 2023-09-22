import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mosque } from '../typeorm/entities/Mosque';
import { MosqueController } from './mosque.controller';
import { MosqueService } from './mosque.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mosque])],
  controllers: [MosqueController],
  providers: [MosqueService],
})
export class MosqueModule {}
