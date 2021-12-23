import { Injectable } from '@nestjs/common';
import { CreateDaoDto } from './dto/create-dao.dto';
import { UpdateDaoDto } from './dto/update-dao.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dao, DaoDocument } from './schemas/dao.schema';
import { TextBlock, TextBlockDocument } from '../common/schemas/textblock.schema';
import { filtersToSearchQuery } from 'src/common/helpers/filtersToSearchQuery';

@Injectable()
export class DaoService {
  constructor(@InjectModel(Dao.name) private daoModel: Model<DaoDocument>, @InjectModel(TextBlock.name) private textBlockModel: Model<TextBlockDocument>) {}

  async create(createDto: CreateDaoDto):  Promise<Dao> {
    const {text_blocks, ...createWithoutTextBlocks} = createDto;

    const createdDao = new this.daoModel(createWithoutTextBlocks);
    await createdDao.save();
    if(text_blocks != null) {
      const savedBlocks = await Promise.all(text_blocks.map((text_block) => {
        const textBlockModel = new this.textBlockModel({...text_block, link_back: createdDao.id})
        return textBlockModel.save();
      }));
      createdDao.text_blocks = savedBlocks;
      return createdDao.save();
    } else {
      return createdDao;
    }
  }

  async findAll(filters: [string]): Promise<Dao[]> {
    return this.daoModel.find(filtersToSearchQuery(filters)).populate('text_blocks').exec();
  }

  async findOne(id: string, lean: boolean = false): Promise<Dao> {
    if(lean) return this.daoModel.findOne({_id:id}).populate('text_blocks').lean();
    return this.daoModel.findOne({_id:id}).populate('text_blocks').exec();
  }

  async update(id: string, updateDto: UpdateDaoDto): Promise<Dao> {
    const text_blocks = updateDto.text_blocks || [];
    const updatedBlocks = await Promise.all(text_blocks.map(text_block => {
      if(text_block._id) {
        return this.textBlockModel.findByIdAndUpdate(text_block._id, text_block).exec();
      } else {
        const textBlockModel = new this.textBlockModel({...text_block, link_back: id});
        return textBlockModel.save();
      }
    }));

    return await this.daoModel.findByIdAndUpdate(id, {...updateDto, text_blocks: updatedBlocks}).exec();
  }

  async remove(id: string): Promise<Dao> {
    const dao = await this.daoModel.findOne({ _id:id }).exec();
    const text_blocks = dao.text_blocks;
    if(text_blocks) {
      await Promise.all(text_blocks.map(text_block => this.textBlockModel.find({_id: text_block}).remove().exec()));
    }
    return dao.deleteOne();
  }
}
