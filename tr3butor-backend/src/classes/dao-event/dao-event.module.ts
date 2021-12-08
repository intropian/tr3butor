import { Module } from '@nestjs/common';
import { DaoEventService } from './dao-event.service';
import { DaoEventController } from './dao-event.controller';
import { DaoEvent, DaoEventSchema } from './schemas/dao-event.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: DaoEvent.name, schema: DaoEventSchema }])],
  controllers: [DaoEventController],
  providers: [DaoEventService]
})
export class DaoEventModule {}
