import { Injectable } from '@nestjs/common';
import { CreateDaoTemplateDto } from './dto/create-dao-template.dto';
import { UpdateDaoTemplateDto } from './dto/update-dao-template.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DaoTemplate, DaoTemplateDocument } from './schemas/dao-template.schema';

@Injectable()
export class DaoTemplateService {
  constructor(@InjectModel(DaoTemplate.name) private daoTemplateModel: Model<DaoTemplateDocument>) {}

  async create(createDto: CreateDaoTemplateDto):  Promise<DaoTemplate> {
    const createdDaoTemplate = new this.daoTemplateModel(createDto);
    return createdDaoTemplate.save();
  }

  async findAll(): Promise<DaoTemplate[]> {
    return this.daoTemplateModel.find().exec();
  }

  async findOne(id: number): Promise<DaoTemplate> {
    return this.daoTemplateModel.findOne({id}).exec();
  }

  async update(id: number, updateDto: UpdateDaoTemplateDto): Promise<DaoTemplate> {
    return this.daoTemplateModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.daoTemplateModel.find({ id }).remove().exec()
  }
}
