import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ReadUserDto } from './dto/read-user.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createDto: CreateUserDto):  Promise<User> {
    const createdUser = new this.userModel(createDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<ReadUserDto> {
    const model = await this.userModel.findOne({_id:id}).exec();
    const {password, nonce, ...userdata} = model.toJSON();
    return userdata;
  }

  async update(id: number, updateDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.userModel.find({ _id:id }).remove().exec()
  }

}
