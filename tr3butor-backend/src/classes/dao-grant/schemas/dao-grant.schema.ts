import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DaoGrantDocument = DaoGrant & Document;

@Schema({toJSON: {virtuals: true}})
export class DaoGrant {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  guidelines: string;
  @Prop()
  requirements: [string];
  @Prop()
  date_start: Date;
  @Prop()
  date_end: Date;
  @Prop()
  payment: string;
}

export const DaoGrantSchema = SchemaFactory.createForClass(DaoGrant);

// https://docs.nestjs.com/techniques/mongodb
