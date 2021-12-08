import { Test, TestingModule } from '@nestjs/testing';
import { DaoQuestController } from './dao-quest.controller';
import { DaoQuestService } from './dao-quest.service';

describe('DaoQuestController', () => {
  let controller: DaoQuestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaoQuestController],
      providers: [DaoQuestService],
    }).compile();

    controller = module.get<DaoQuestController>(DaoQuestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
