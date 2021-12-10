import { Module } from '@nestjs/common';
import { DaoService } from './dao.service';
import { DaoJobService } from '../dao-job/dao-job.service';
import { DaoJobModule } from '../dao-job/dao-job.module';
import { DaoController } from './dao.controller';
import { Dao, DaoSchema } from './schemas/dao.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dao.name, schema: DaoSchema }]), DaoJobModule],
  controllers: [DaoController],
  providers: [DaoService]
})
export class DaoModule {}
