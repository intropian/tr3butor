import { Module } from '@nestjs/common';
import { BlogArticleService } from './blog-article.service';
import { BlogArticleController } from './blog-article.controller';
import { BlogArticle, BlogArticleSchema } from './schemas/blog-article.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: BlogArticle.name, schema: BlogArticleSchema }])],
  controllers: [BlogArticleController],
  providers: [BlogArticleService]
})
export class BlogArticleModule {}
