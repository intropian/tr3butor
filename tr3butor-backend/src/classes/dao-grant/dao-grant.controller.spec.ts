import { Test, TestingModule } from '@nestjs/testing';
import { DaoGrantController } from './dao-grant.controller';
import { DaoGrantService } from './dao-grant.service';

describe('DaoGrantController', () => {
  let controller: DaoGrantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaoGrantController],
      providers: [DaoGrantService],
    }).compile();

    controller = module.get<DaoGrantController>(DaoGrantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
