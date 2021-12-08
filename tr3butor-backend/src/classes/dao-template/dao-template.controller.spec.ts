import { Test, TestingModule } from '@nestjs/testing';
import { DaoTemplateController } from './dao-template.controller';
import { DaoTemplateService } from './dao-template.service';

describe('DaoTemplateController', () => {
  let controller: DaoTemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaoTemplateController],
      providers: [DaoTemplateService],
    }).compile();

    controller = module.get<DaoTemplateController>(DaoTemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
