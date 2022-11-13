import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // eslint-disable-next-line no-empty-function
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('reciept')
  getReciept(@Query() query: { id: string }): any {
    const id = query.id;
    if (!id) throw new BadRequestException('id is required');
    return this.appService.getReciept(id);
  }
}
