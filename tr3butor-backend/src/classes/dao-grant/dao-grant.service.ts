import { Injectable } from '@nestjs/common';
import { CreateDaoGrantDto } from './dto/create-dao-grant.dto';
import { UpdateDaoGrantDto } from './dto/update-dao-grant.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DaoGrant, DaoGrantDocument } from './schemas/dao-grant.schema';

@Injectable()
export class DaoGrantService {
  constructor(@InjectModel(DaoGrant.name) private daoGrantModel: Model<DaoGrantDocument>) {}

  async create(createDto: CreateDaoGrantDto):  Promise<DaoGrant> {
    const createdDaoGrant = new this.daoGrantModel(createDto);
    return createdDaoGrant.save();
  }

  async findAll(): Promise<DaoGrant[]> {
    return this.daoGrantModel.find().exec();
  }

  async findOne(id: number): Promise<DaoGrant> {
    return this.daoGrantModel.findOne({id}).exec();
  }

  async update(id: number, updateDto: UpdateDaoGrantDto): Promise<DaoGrant> {
    return this.daoGrantModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.daoGrantModel.find({ id }).remove().exec()
  }
}
