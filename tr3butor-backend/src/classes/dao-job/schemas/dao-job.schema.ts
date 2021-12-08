import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DaoJobDocument = DaoJob & Document;

@Schema({toJSON: {virtuals: true}})
export class DaoJob {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  requirements: [string];
  @Prop()
  hard_skills: [string];
  @Prop()
  soft_skills: [string];
  @Prop()
  experience: string;
  @Prop()
  education: string;
  @Prop()
  location: string;
  @Prop()
  timezone: string;
  @Prop()
  payment: string;
  @Prop()
  time_length: string; // may be enum
}

export const DaoJobSchema = SchemaFactory.createForClass(DaoJob);

// https://docs.nestjs.com/techniques/mongodb
