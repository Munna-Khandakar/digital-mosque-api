import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMosqueDto } from 'src/dto/mosque/CreateMosque.dto';
import { Mosque } from 'src/typeorm/entities/Mosque';
import { Repository } from 'typeorm';

@Injectable()
export class MosqueService {
  constructor(
    @InjectRepository(Mosque) private mosqueRepository: Repository<Mosque>,
  ) {}

  async getMosques() {
    return this.mosqueRepository.find();
  }
  async createMosque(payload: CreateMosqueDto) {
    const newMosque = this.mosqueRepository.create(payload);
    const savedMosque = await this.mosqueRepository.save(newMosque);
    return savedMosque;
  }
}
