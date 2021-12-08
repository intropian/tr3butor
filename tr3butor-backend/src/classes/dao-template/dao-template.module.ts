import { Module } from '@nestjs/common';
import { DaoTemplateService } from './dao-template.service';
import { DaoTemplateController } from './dao-template.controller';
import { DaoTemplate, DaoTemplateSchema } from './schemas/dao-template.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: DaoTemplate.name, schema: DaoTemplateSchema }])],
  controllers: [DaoTemplateController],
  providers: [DaoTemplateService]
})
export class DaoTemplateModule {}
