import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DaoEventDocument = DaoEvent & Document;

@Schema({toJSON: {virtuals: true}})
export class DaoEvent {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  date_start: Date;
  @Prop()
  price: number;
}

export const DaoEventSchema = SchemaFactory.createForClass(DaoEvent);

// https://docs.nestjs.com/techniques/mongodb
