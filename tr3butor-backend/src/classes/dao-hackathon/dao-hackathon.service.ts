import { Injectable } from '@nestjs/common';
import { CreateDaoHackathonDto } from './dto/create-dao-hackathon.dto';
import { UpdateDaoHackathonDto } from './dto/update-dao-hackathon.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DaoHackathon, DaoHackathonDocument } from './schemas/dao-hackathon.schema';

@Injectable()
export class DaoHackathonService {
  constructor(@InjectModel(DaoHackathon.name) private daoHackathonModel: Model<DaoHackathonDocument>) {}

  async create(createDto: CreateDaoHackathonDto):  Promise<DaoHackathon> {
    const createdDaoHackathon = new this.daoHackathonModel(createDto);
    return createdDaoHackathon.save();
  }

  async findAll(): Promise<DaoHackathon[]> {
    return this.daoHackathonModel.find().exec();
  }

  async findOne(id: number): Promise<DaoHackathon> {
    return this.daoHackathonModel.findOne({_id:id}).exec();
  }

  async update(id: number, updateDto: UpdateDaoHackathonDto): Promise<DaoHackathon> {
    return this.daoHackathonModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.daoHackathonModel.find({ _id:id }).remove().exec()
  }
}
