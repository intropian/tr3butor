import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DaoHackathonDocument = DaoHackathon & Document;

@Schema({toJSON: {virtuals: true}})
export class DaoHackathon {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  requirements: [string];
  @Prop()
  date_start: Date;
  @Prop()
  date_end: Date;
  @Prop()
  location: string;
  @Prop()
  payment: string;
}

export const DaoHackathonSchema = SchemaFactory.createForClass(DaoHackathon);

// https://docs.nestjs.com/techniques/mongodb
