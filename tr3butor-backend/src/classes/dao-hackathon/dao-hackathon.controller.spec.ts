import { Test, TestingModule } from '@nestjs/testing';
import { DaoHackathonController } from './dao-hackathon.controller';
import { DaoHackathonService } from './dao-hackathon.service';

describe('DaoHackathonController', () => {
  let controller: DaoHackathonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaoHackathonController],
      providers: [DaoHackathonService],
    }).compile();

    controller = module.get<DaoHackathonController>(DaoHackathonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
