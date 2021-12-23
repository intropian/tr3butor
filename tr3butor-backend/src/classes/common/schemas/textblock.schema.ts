import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type TextBlockDocument = TextBlock & Document;

@Schema({toJSON: {virtuals: true}})
export class TextBlock {
  @Prop()
  title: string;
  @Prop()
  content: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  owner?: User;

  @Prop({ type: MongooseSchema.Types.ObjectId}) // we might want it later
  link_back?: string;

}

export const TextBlockSchema = SchemaFactory.createForClass(TextBlock);

// https://docs.nestjs.com/techniques/mongodb
