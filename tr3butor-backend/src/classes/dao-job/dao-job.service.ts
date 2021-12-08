import { Injectable } from '@nestjs/common';
import { CreateDaoJobDto } from './dto/create-dao-job.dto';
import { UpdateDaoJobDto } from './dto/update-dao-job.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DaoJob, DaoJobDocument } from './schemas/dao-job.schema';

@Injectable()
export class DaoJobService {
  constructor(@InjectModel(DaoJob.name) private daoJobModel: Model<DaoJobDocument>) {}

  async create(createDto: CreateDaoJobDto):  Promise<DaoJob> {
    const createdDaoJob = new this.daoJobModel(createDto);
    return createdDaoJob.save();
  }

  async findAll(): Promise<DaoJob[]> {
    return this.daoJobModel.find().exec();
  }

  async findOne(id: number): Promise<DaoJob> {
    return this.daoJobModel.findOne({id}).exec();
  }

  async update(id: number, updateDto: UpdateDaoJobDto): Promise<DaoJob> {
    return this.daoJobModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.daoJobModel.find({ id }).remove().exec()
  }
}
