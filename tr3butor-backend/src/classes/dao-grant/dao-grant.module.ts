import { Module } from '@nestjs/common';
import { DaoGrantService } from './dao-grant.service';
import { DaoGrantController } from './dao-grant.controller';
import { DaoGrant, DaoGrantSchema } from './schemas/dao-grant.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: DaoGrant.name, schema: DaoGrantSchema }])],
  controllers: [DaoGrantController],
  providers: [DaoGrantService]
})
export class DaoGrantModule {}
