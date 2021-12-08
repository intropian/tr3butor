import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogArticleService } from './blog-article.service';
import { CreateBlogArticleDto } from './dto/create-blog-article.dto';
import { UpdateBlogArticleDto } from './dto/update-blog-article.dto';
import { BlogArticle } from './entities/blog-article.entity';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse
} from '@nestjs/swagger';


@Controller('blog-article')
export class BlogArticleController {
  constructor(private readonly blogArticleService: BlogArticleService) {}

  @Post()
  @ApiOperation({ summary: 'Create blog article' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BlogArticle,
  })
  create(@Body() createBlogArticleDto: CreateBlogArticleDto): Promise<BlogArticle> {
    return this.blogArticleService.create(createBlogArticleDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of blog articles',
    type: [BlogArticle],
  })
  async findAll() {
    return await this.blogArticleService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found blog article',
    type: BlogArticle,
  })
  findOne(@Param('id') id: string) {
    return this.blogArticleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogArticleDto: UpdateBlogArticleDto) {
    return this.blogArticleService.update(+id, updateBlogArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogArticleService.remove(+id);
  }
}
