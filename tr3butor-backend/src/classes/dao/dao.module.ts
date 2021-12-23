import { Module } from '@nestjs/common';
import { DaoService } from './dao.service';
import { DaoJobModule } from '../dao-job/dao-job.module';
import { DaoController } from './dao.controller';
import { Dao, DaoSchema } from './schemas/dao.schema';
import { TextBlock, TextBlockSchema } from '../common/schemas/textblock.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dao.name, schema: DaoSchema }]),
    MongooseModule.forFeature([{ name: TextBlock.name, schema: TextBlockSchema }]),
    DaoJobModule
],
  controllers: [DaoController],
  providers: [DaoService],
})
export class DaoModule {}
