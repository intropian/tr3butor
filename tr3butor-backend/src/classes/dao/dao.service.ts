import { Injectable } from '@nestjs/common';
import { CreateDaoDto } from './dto/create-dao.dto';
import { UpdateDaoDto } from './dto/update-dao.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dao, DaoDocument } from './schemas/dao.schema';
import { filtersToSearchQuery } from 'src/common/helpers/filtersToSearchQuery';

@Injectable()
export class DaoService {
  constructor(@InjectModel(Dao.name) private daoModel: Model<DaoDocument>) {}

  async create(createDto: CreateDaoDto):  Promise<Dao> {
    const createdDao = new this.daoModel(createDto);
    return createdDao.save();
  }

  async findAll(filters: [string]): Promise<Dao[]> {
    return this.daoModel.find(filtersToSearchQuery(filters)).exec();
  }

  async findOne(id: string): Promise<Dao> {
    return this.daoModel.findOne({_id:id}).exec();
  }

  async update(id: string, updateDto: UpdateDaoDto): Promise<Dao> {
    return this.daoModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: string): Promise<UpdateWriteOpResult> {
    return this.daoModel.find({ _id:id }).remove().exec()
  }
}
