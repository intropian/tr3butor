import { Test, TestingModule } from '@nestjs/testing';
import { DaoBountyController } from './dao-bounty.controller';
import { DaoBountyService } from './dao-bounty.service';

describe('DaoBountyController', () => {
  let controller: DaoBountyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaoBountyController],
      providers: [DaoBountyService],
    }).compile();

    controller = module.get<DaoBountyController>(DaoBountyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
