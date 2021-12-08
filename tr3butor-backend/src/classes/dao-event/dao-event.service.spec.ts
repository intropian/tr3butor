import { Test, TestingModule } from '@nestjs/testing';
import { DaoEventService } from './dao-event.service';

describe('DaoEventService', () => {
  let service: DaoEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaoEventService],
    }).compile();

    service = module.get<DaoEventService>(DaoEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
