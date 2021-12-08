import { Test, TestingModule } from '@nestjs/testing';
import { DaoQuestService } from './dao-quest.service';

describe('DaoQuestService', () => {
  let service: DaoQuestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaoQuestService],
    }).compile();

    service = module.get<DaoQuestService>(DaoQuestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
