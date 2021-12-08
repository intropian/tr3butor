import { Test, TestingModule } from '@nestjs/testing';
import { DaoJobService } from './dao-job.service';

describe('DaoJobService', () => {
  let service: DaoJobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaoJobService],
    }).compile();

    service = module.get<DaoJobService>(DaoJobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
