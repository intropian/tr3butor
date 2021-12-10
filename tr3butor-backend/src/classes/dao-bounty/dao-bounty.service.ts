import { Injectable } from '@nestjs/common';
import { CreateDaoBountyDto } from './dto/create-dao-bounty.dto';
import { UpdateDaoBountyDto } from './dto/update-dao-bounty.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DaoBounty, DaoBountyDocument } from './schemas/dao-bounty.schema';

@Injectable()
export class DaoBountyService {
  constructor(@InjectModel(DaoBounty.name) private daoBountyModel: Model<DaoBountyDocument>) {}

  async create(createDto: CreateDaoBountyDto):  Promise<DaoBounty> {
    const createdDaoBounty = new this.daoBountyModel(createDto);
    return createdDaoBounty.save();
  }

  async findAll(): Promise<DaoBounty[]> {
    return this.daoBountyModel.find().exec();
  }

  async findOne(id: number): Promise<DaoBounty> {
    return this.daoBountyModel.findOne({_id:id}).exec();
  }

  async update(id: number, updateDto: UpdateDaoBountyDto): Promise<DaoBounty> {
    return this.daoBountyModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.daoBountyModel.find({ _id:id }).remove().exec()
  }
}
