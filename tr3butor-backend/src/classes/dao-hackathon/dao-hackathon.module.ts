import { Module } from '@nestjs/common';
import { DaoHackathonService } from './dao-hackathon.service';
import { DaoHackathonController } from './dao-hackathon.controller';
import { DaoHackathon, DaoHackathonSchema } from './schemas/dao-hackathon.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: DaoHackathon.name, schema: DaoHackathonSchema }])],
  controllers: [DaoHackathonController],
  providers: [DaoHackathonService]
})
export class DaoHackathonModule {}
