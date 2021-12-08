import { Module } from '@nestjs/common';
import { DaoQuestService } from './dao-quest.service';
import { DaoQuestController } from './dao-quest.controller';
import { DaoQuest, DaoQuestSchema } from './schemas/dao-quest.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: DaoQuest.name, schema: DaoQuestSchema }])],
  controllers: [DaoQuestController],
  providers: [DaoQuestService]
})
export class DaoQuestModule {}
