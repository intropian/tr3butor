import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {Dao} from '../../dao/schemas/dao.schema';

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

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Dao' }] })
  favourite_daos: Dao[];
}

export const TalentSchema = SchemaFactory.createForClass(Talent);

// https://docs.nestjs.com/techniques/mongodb
