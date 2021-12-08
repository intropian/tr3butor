import { Injectable } from '@nestjs/common';
import { CreateBlogArticleDto } from './dto/create-blog-article.dto';
import { UpdateBlogArticleDto } from './dto/update-blog-article.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BlogArticle, BlogArticleDocument } from './schemas/blog-article.schema';

@Injectable()
export class BlogArticleService {
  constructor(@InjectModel(BlogArticle.name) private blogArticleModel: Model<BlogArticleDocument>) {}

  async create(createDto: CreateBlogArticleDto):  Promise<BlogArticle> {
    const createdBlogArticle = new this.blogArticleModel(createDto);
    return createdBlogArticle.save();
  }

  async findAll(): Promise<BlogArticle[]> {
    return this.blogArticleModel.find().exec();
  }

  async findOne(id: number): Promise<BlogArticle> {
    return this.blogArticleModel.findOne({id}).exec();
  }

  async update(id: number, updateDto: UpdateBlogArticleDto): Promise<BlogArticle> {
    return this.blogArticleModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.blogArticleModel.find({ id }).remove().exec()
  }
}
