import { Injectable } from '@nestjs/common';
import { CreateDaoDto } from './dto/create-dao.dto';
import { UpdateDaoDto } from './dto/update-dao.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dao, DaoDocument } from './schemas/dao.schema';

@Injectable()
export class DaoService {
  constructor(@InjectModel(Dao.name) private daoModel: Model<DaoDocument>) {}

  async create(createDto: CreateDaoDto):  Promise<Dao> {
    const createdDao = new this.daoModel(createDto);
    return createdDao.save();
  }

  async findAll(): Promise<Dao[]> {
    return this.daoModel.find().exec();
  }

  async findOne(id: number): Promise<Dao> {
    return this.daoModel.findOne({id}).exec();
  }

  async update(id: number, updateDto: UpdateDaoDto): Promise<Dao> {
    return this.daoModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.daoModel.find({ id }).remove().exec()
  }
}
