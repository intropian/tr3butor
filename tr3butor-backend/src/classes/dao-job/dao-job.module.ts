import { Module } from '@nestjs/common';
import { DaoJobService } from './dao-job.service';
import { DaoJobController } from './dao-job.controller';
import { DaoJob, DaoJobSchema } from './schemas/dao-job.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: DaoJob.name, schema: DaoJobSchema }])],
  controllers: [DaoJobController],
  providers: [DaoJobService]
})
export class DaoJobModule {}
