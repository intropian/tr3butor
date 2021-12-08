import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogArticleDocument = BlogArticle & Document;

@Schema({toJSON: {virtuals: true}})
export class BlogArticle {
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop()
  author: string;
  @Prop()
  created_at: Date;
  @Prop()
  hash_tags: [string]
}

export const BlogArticleSchema = SchemaFactory.createForClass(BlogArticle);
