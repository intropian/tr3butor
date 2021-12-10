import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
  @Prop()
  public_addr: string;

  @Prop()
  nonce: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// https://docs.nestjs.com/techniques/mongodb
