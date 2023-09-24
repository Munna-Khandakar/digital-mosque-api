import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMosqueDto } from 'src/dto/mosque/CreateMosque.dto';
import { MosqueService } from './mosque.service';

@Controller('api/mosque')
export class MosqueController {
  constructor(private mosqueService: MosqueService) {}
  @Get('')
  getMosques() {
    return this.mosqueService.getMosques();
  }

  @Post('')
  createMosque(@Body() body: CreateMosqueDto) {
    return body;
  }
}
