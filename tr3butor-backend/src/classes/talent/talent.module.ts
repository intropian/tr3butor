import { Module } from '@nestjs/common';
import { TalentService } from './talent.service';
import { TalentController } from './talent.controller';
import { Talent, TalentSchema } from './schemas/talent.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Talent.name, schema: TalentSchema }])],
  controllers: [TalentController],
  providers: [TalentService]
})
export class TalentModule {}
