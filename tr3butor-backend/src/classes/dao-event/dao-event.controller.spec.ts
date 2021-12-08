import { Test, TestingModule } from '@nestjs/testing';
import { DaoEventController } from './dao-event.controller';
import { DaoEventService } from './dao-event.service';

describe('DaoEventController', () => {
  let controller: DaoEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaoEventController],
      providers: [DaoEventService],
    }).compile();

    controller = module.get<DaoEventController>(DaoEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
