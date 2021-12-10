import { Injectable } from '@nestjs/common';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Talent, TalentDocument } from './schemas/talent.schema';

@Injectable()
export class TalentService {
  constructor(@InjectModel(Talent.name) private talentModel: Model<TalentDocument>) {}

  async create(createDto: CreateTalentDto):  Promise<Talent> {
    const createdTalent = new this.talentModel(createDto);
    return createdTalent.save();
  }

  async findAll(): Promise<Talent[]> {
    return this.talentModel.find().exec();
  }

  async findOne(id: number): Promise<Talent> {
    return this.talentModel.findOne({_id:id}).exec();
  }

  async update(id: number, updateDto: UpdateTalentDto): Promise<Talent> {
    return this.talentModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.talentModel.find({ _id:id }).remove().exec()
  }
}
