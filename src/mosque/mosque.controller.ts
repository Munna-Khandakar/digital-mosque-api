import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('mosque')
export class MosqueController {
  @Get('')
  getMosques() {
    return 'GET all the Mosque';
  }

  @Post('')
  createMosque(@Body() body: any) {
    return body;
  }
}
