import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../user/schemas/user.schema';
import { TextBlock } from '../../common/schemas/textblock.schema';

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

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  admin: User; // what should it be?

  @Prop()
  avatar: string;
  @Prop()
  color: string;
  @Prop()
  tags: string;
  @Prop()
  date_founded: string;
  @Prop()
  contributors: string[];
  @Prop()
  metric_mcap: string;
  @Prop()
  metric_tvl: string;
  @Prop()
  metric_volume: string;
  @Prop()
  link_website: string;
  @Prop()
  link_telegram: string;
  @Prop()
  link_twitter: string;
  @Prop()
  link_reddit: string;
  @Prop()
  link_discord: string;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'TextBlock' }])
  text_blocks: TextBlock[]

  @Prop()
  favourited_users_count: number;

}

export const DaoSchema = SchemaFactory.createForClass(Dao);
