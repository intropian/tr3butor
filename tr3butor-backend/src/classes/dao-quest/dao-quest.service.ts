import { Injectable } from '@nestjs/common';
import { CreateDaoQuestDto } from './dto/create-dao-quest.dto';
import { UpdateDaoQuestDto } from './dto/update-dao-quest.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DaoQuest, DaoQuestDocument } from './schemas/dao-quest.schema';

@Injectable()
export class DaoQuestService {
  constructor(@InjectModel(DaoQuest.name) private daoQuestModel: Model<DaoQuestDocument>) {}

  async create(createDto: CreateDaoQuestDto):  Promise<DaoQuest> {
    const createdDaoQuest = new this.daoQuestModel(createDto);
    return createdDaoQuest.save();
  }

  async findAll(): Promise<DaoQuest[]> {
    return this.daoQuestModel.find().exec();
  }

  async findOne(id: number): Promise<DaoQuest> {
    return this.daoQuestModel.findOne({id}).exec();
  }

  async update(id: number, updateDto: UpdateDaoQuestDto): Promise<DaoQuest> {
    return this.daoQuestModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.daoQuestModel.find({ id }).remove().exec()
  }
}
