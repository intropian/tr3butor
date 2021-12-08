import { Module } from '@nestjs/common';
import { DaoBountyService } from './dao-bounty.service';
import { DaoBountyController } from './dao-bounty.controller';
import { DaoBounty, DaoBountySchema } from './schemas/dao-bounty.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: DaoBounty.name, schema: DaoBountySchema }])],
  controllers: [DaoBountyController],
  providers: [DaoBountyService]
})
export class DaoBountyModule {}
