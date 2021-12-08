import { Test, TestingModule } from '@nestjs/testing';
import { DaoBountyService } from './dao-bounty.service';

describe('DaoBountyService', () => {
  let service: DaoBountyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaoBountyService],
    }).compile();

    service = module.get<DaoBountyService>(DaoBountyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
