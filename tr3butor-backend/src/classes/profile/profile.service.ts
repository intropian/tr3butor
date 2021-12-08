import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Profile, ProfileDocument } from './schemas/profile.schema';

@Injectable()
export class ProfileService {
  constructor(@InjectModel(Profile.name) private profileModel: Model<ProfileDocument>) {}

  async create(createProfileDto: CreateProfileDto):  Promise<Profile> {
    const createdProfile = new this.profileModel(createProfileDto);
    return createdProfile.save();
  }

  async findAll(): Promise<Profile[]> {
    return this.profileModel.find().exec();
  }

  async findOne(id: number): Promise<Profile> {
    return this.profileModel.findOne({id}).exec();
  }

  async update(id: number, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    return this.profileModel.findByIdAndUpdate(id, updateProfileDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.profileModel.find({ id }).remove().exec()
  }
}
