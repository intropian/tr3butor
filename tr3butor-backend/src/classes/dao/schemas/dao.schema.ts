import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DaoDocument = Dao & Document;

@Schema({toJSON: {virtuals: true}})
export class Dao {
  @Prop()
  name: string;
  @Prop()
  eth_address: string;
  @Prop()
  description: string;
  @Prop()
  admin_id: string; // what should it be?
  //import { Owner } from '../owners/schemas/owner.schema';
  // Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })

  @Prop()
  mission: string;
  @Prop()
  culture_values: string;
  @Prop()
  history: string;
  @Prop()
  core_team: [string];
  @Prop()
  benefits: [string];
}

export const DaoSchema = SchemaFactory.createForClass(Dao);

// https://docs.nestjs.com/techniques/mongodb
