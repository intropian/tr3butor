import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DaoQuestDocument = DaoQuest & Document;

@Schema({toJSON: {virtuals: true}})
export class DaoQuest {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  date_start: Date;
  @Prop()
  date_end: Date;
  @Prop()
  payment: string;
  @Prop()
  requirements: [string];
  @Prop()
  time_length: string; // may be enum
}

export const DaoQuestSchema = SchemaFactory.createForClass(DaoQuest);

// https://docs.nestjs.com/techniques/mongodb
