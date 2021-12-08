import { Test, TestingModule } from '@nestjs/testing';
import { DaoTemplateService } from './dao-template.service';

describe('DaoTemplateService', () => {
  let service: DaoTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaoTemplateService],
    }).compile();

    service = module.get<DaoTemplateService>(DaoTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
