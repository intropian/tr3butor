import { Test, TestingModule } from '@nestjs/testing';
import { DaoGrantService } from './dao-grant.service';

describe('DaoGrantService', () => {
  let service: DaoGrantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaoGrantService],
    }).compile();

    service = module.get<DaoGrantService>(DaoGrantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
