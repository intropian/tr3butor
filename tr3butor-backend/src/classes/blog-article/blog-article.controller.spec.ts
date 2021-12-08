import { Test, TestingModule } from '@nestjs/testing';
import { BlogArticleController } from './blog-article.controller';
import { BlogArticleService } from './blog-article.service';

describe('BlogArticleController', () => {
  let controller: BlogArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogArticleController],
      providers: [BlogArticleService],
    }).compile();

    controller = module.get<BlogArticleController>(BlogArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
