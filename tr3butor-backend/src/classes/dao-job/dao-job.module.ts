import { Module } from '@nestjs/common';
import { DaoJobService } from './dao-job.service';
import { DaoJobController } from './dao-job.controller';
import { DaoJob, DaoJobSchema } from './schemas/dao-job.schema';
import { TextBlock, TextBlockSchema } from '../common/schemas/textblock.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DaoJob.name, schema: DaoJobSchema }]),
    MongooseModule.forFeature([{ name: TextBlock.name, schema: TextBlockSchema }]),
  ],
  controllers: [DaoJobController],
  providers: [DaoJobService],
  exports: [DaoJobService]
})
export class DaoJobModule {}
