import { Test, TestingModule } from '@nestjs/testing';
import { UniversityScrapperService } from './university-scrapper.service';

describe('UniversityScrapperService', () => {
  let service: UniversityScrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniversityScrapperService],
    }).compile();

    service = module.get<UniversityScrapperService>(UniversityScrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
