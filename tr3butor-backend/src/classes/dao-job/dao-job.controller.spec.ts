import { Test, TestingModule } from '@nestjs/testing';
import { DaoJobController } from './dao-job.controller';
import { DaoJobService } from './dao-job.service';

describe('DaoJobController', () => {
  let controller: DaoJobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaoJobController],
      providers: [DaoJobService],
    }).compile();

    controller = module.get<DaoJobController>(DaoJobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
