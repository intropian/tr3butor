import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DaoTemplateDocument = DaoTemplate & Document;

@Schema({toJSON: {virtuals: true}})
export class DaoTemplate {
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop()
  author: string;
  @Prop()
  created_at: Date;
  @Prop()
  hash_tags: [string];
}

export const DaoTemplateSchema = SchemaFactory.createForClass(DaoTemplate);

// https://docs.nestjs.com/techniques/mongodb
