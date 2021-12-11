import { Injectable } from '@nestjs/common';
import { CreateDaoJobDto } from './dto/create-dao-job.dto';
import { UpdateDaoJobDto } from './dto/update-dao-job.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DaoJob, DaoJobDocument } from './schemas/dao-job.schema';
import { filtersToSearchQuery } from 'src/common/helpers/filtersToSearchQuery';
import {  Types as MongooseTypes } from 'mongoose';

@Injectable()
export class DaoJobService {
  constructor(@InjectModel(DaoJob.name) private daoJobModel: Model<DaoJobDocument>) {}

  async create(createDto: CreateDaoJobDto):  Promise<DaoJob> {
    const createdDaoJob = new this.daoJobModel(createDto);
    return createdDaoJob.save();
  }

  async findAll(filters: [string]): Promise<DaoJob[]> {
    return this.daoJobModel.find(filtersToSearchQuery(filters)).populate('dao', ['name', 'avatar']).exec();
  }
  async findDaoJobs(id: string, lean: boolean = false): Promise<DaoJob[]> {
    if(lean) return this.daoJobModel.find({dao: id}).populate('dao', ['name', 'avatar']).lean();
    return this.daoJobModel.find({dao: id}).exec();
  }
  async findOne(id: string, lean: boolean = false): Promise<DaoJob> {
    if(lean) {
      return this.daoJobModel.findOne({_id:id}).populate('dao', ['name', 'avatar']).exec();
    }
    return this.daoJobModel.findOne({_id:id}).exec();
  }

  async update(id: string, updateDto: UpdateDaoJobDto): Promise<DaoJob> {
    return this.daoJobModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: string): Promise<UpdateWriteOpResult> {
    return this.daoJobModel.find({ _id:id }).remove().exec()
  }
}
