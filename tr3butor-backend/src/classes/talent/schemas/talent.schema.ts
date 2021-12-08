import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TalentDocument = Talent & Document;

@Schema({toJSON: {virtuals: true}})
export class Talent {
  @Prop()
  nickname: string;
  @Prop()
  description: string;
  @Prop()
  experience: string;
  @Prop()
  skills: [string];
  @Prop()
  preferences: [string];
  @Prop()
  time_availability: string;
  @Prop()
  eth_wallet: string;
}

export const TalentSchema = SchemaFactory.createForClass(Talent);

// https://docs.nestjs.com/techniques/mongodb
