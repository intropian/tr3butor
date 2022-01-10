import { Injectable, NotFoundException } from '@nestjs/common';
import { AddFavouritesDto, RemoveFavouritesDto } from './dto/favourites.dto';
import { Dao } from '../dao/entities/dao.entity';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
//import { randomUUID } from 'crypto';
import { v4 as randomUUID } from 'uuid';


type StringArray = string[];

@Injectable()
export class FavouritesService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}


  async add(userId: string, addFavouriteDaosDto: AddFavouritesDto): Promise<boolean> {
    const user = await this.userModel.findOne({_id: userId}).exec();
    if(user) {
      const combined_favourite_dao_ids = new Set(user.favourite_daos.map(dao => dao.toString()).concat(addFavouriteDaosDto.favourites_ids));
      user.favourite_daos = [...combined_favourite_dao_ids];
      await user.save();
      return true;
    } else {
      throw new NotFoundException('wrong user_id');
    }
  }

  async remove(userId: string, removeFavouriteDaosDto: RemoveFavouritesDto): Promise<boolean> {
    const user = await this.userModel.findOne({_id: userId}).exec();
    if(user) {
      const ids_to_remove = new Set(removeFavouriteDaosDto.favourites_ids);
      const uniq_dao_to_leave = user.favourite_daos.map(dao => dao.toString()).filter(dao_to_leave => !ids_to_remove.has(dao_to_leave));
      user.favourite_daos = uniq_dao_to_leave;
      await user.save();
      return true;
    } else {
      throw new NotFoundException('wrong user_id');
    }
  }

  async get(userId: string) {
    const user = await this.userModel.findOne({_id: userId}).select('favourite_daos').populate('favourite_daos').exec();
    if(user) {
      return user.favourite_daos; // fuck typescript
    } else {
      throw new NotFoundException('wrong user_id');
    }
  }
}
