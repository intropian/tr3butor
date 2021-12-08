import { Test, TestingModule } from '@nestjs/testing';
import { BlogArticleService } from './blog-article.service';

describe('BlogArticleService', () => {
  let service: BlogArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogArticleService],
    }).compile();

    service = module.get<BlogArticleService>(BlogArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
