import { Test, TestingModule } from '@nestjs/testing';
import { DaoHackathonService } from './dao-hackathon.service';

describe('DaoHackathonService', () => {
  let service: DaoHackathonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaoHackathonService],
    }).compile();

    service = module.get<DaoHackathonService>(DaoHackathonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
