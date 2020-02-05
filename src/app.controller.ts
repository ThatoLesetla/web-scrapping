import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UniversityScrapperService } from './services/university-scrapper/university-scrapper.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly uniService: UniversityScrapperService ) {}

  /* @Get()
  getHello(): string {
    return this.appService.getHello();
  } */

  @Get()
  getData(): string {
    this.uniService.getData();
    return 'The code executed';
  }
}
