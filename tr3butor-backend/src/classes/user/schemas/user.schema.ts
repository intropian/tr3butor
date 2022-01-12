import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Dao } from '../../dao/schemas/dao.schema';

export type UserDocument = User & Document;

@Schema({toJSON: {virtuals: true}})
export class User {
  @Prop()
  login: string;
  @Prop()
  password: string; // hash
  @Prop()
  name: string;
  @Prop()
  created_at: Date;
  @Prop()
  last_login: Date;
  @Prop()
  email: string;
  @Prop()
  twitter_handle: string;
  @Prop()
  eth_handle: string;
  @Prop({required: true, index: true})
  public_addr: string;

  @Prop()
  nonce: string;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Dao' }])
  favourite_daos: Dao[] | string[]

}

export const UserSchema = SchemaFactory.createForClass(User);

// https://docs.nestjs.com/techniques/mongodb
