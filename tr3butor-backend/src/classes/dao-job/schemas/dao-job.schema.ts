import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Dao } from '../../dao/schemas/dao.schema';

export type DaoJobDocument = DaoJob & Document;

@Schema({toJSON: {virtuals: true}})
export class DaoJob {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  salary_range: string;
  @Prop()
  how_to_apply: string;
  @Prop()
  linl_apply: string;
  @Prop()
  responsibilities: [string];
  @Prop()
  role_mission: string;
  @Prop()
  hard_skills_requirements: [string];
  @Prop()
  soft_skills_requirements: [string];
  @Prop()
  culture_requirements: [string];
  @Prop()
  experience_requirements: string;
  @Prop()
  education_requirements: string;
  @Prop()
  work_conditions: [string];
  @Prop()
  benefits: [string];
  @Prop()
  red_alerts: [string];
  @Prop()
  additional_role_benefits: [string];
  @Prop()
  location: string;
  @Prop()
  timezone: string;
  @Prop()
  payment: string;
  @Prop()
  time_length: string; // may be enum

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Dao' })
  dao: Dao;

  @Prop()
  created_at: Date;
}

export const DaoJobSchema = SchemaFactory.createForClass(DaoJob);

// https://docs.nestjs.com/techniques/mongodb
