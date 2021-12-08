import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DaoBountyDocument = DaoBounty & Document;

@Schema({toJSON: {virtuals: true}})
export class DaoBounty {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  acceptance_criteria: string;
  @Prop()
  date_start: Date;
  @Prop()
  time_lenght: string; // may be enum
  @Prop()
  payment: string;
}

export const DaoBountySchema = SchemaFactory.createForClass(DaoBounty);

// https://docs.nestjs.com/techniques/mongodb
