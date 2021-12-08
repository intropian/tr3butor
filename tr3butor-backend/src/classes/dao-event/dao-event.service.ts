import { Injectable } from '@nestjs/common';
import { CreateDaoEventDto } from './dto/create-dao-event.dto';
import { UpdateDaoEventDto } from './dto/update-dao-event.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DaoEvent, DaoEventDocument } from './schemas/dao-event.schema';

@Injectable()
export class DaoEventService {
  constructor(@InjectModel(DaoEvent.name) private daoEventModel: Model<DaoEventDocument>) {}

  async create(createDto: CreateDaoEventDto):  Promise<DaoEvent> {
    const createdDaoEvent = new this.daoEventModel(createDto);
    return createdDaoEvent.save();
  }

  async findAll(): Promise<DaoEvent[]> {
    return this.daoEventModel.find().exec();
  }

  async findOne(id: number): Promise<DaoEvent> {
    return this.daoEventModel.findOne({id}).exec();
  }

  async update(id: number, updateDto: UpdateDaoEventDto): Promise<DaoEvent> {
    return this.daoEventModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.daoEventModel.find({ id }).remove().exec()
  }
}
