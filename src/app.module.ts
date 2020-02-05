import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityScrapperService } from './services/university-scrapper/university-scrapper.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UniversityScrapperService],
})
export class AppModule {}
