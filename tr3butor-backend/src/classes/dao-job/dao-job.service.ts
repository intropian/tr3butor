import { Injectable } from '@nestjs/common';
import { CreateDaoJobDto } from './dto/create-dao-job.dto';
import { UpdateDaoJobDto } from './dto/update-dao-job.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DaoJob, DaoJobDocument } from './schemas/dao-job.schema';
import { TextBlock, TextBlockDocument } from '../common/schemas/textblock.schema';
import { filtersToSearchQuery } from 'src/common/helpers/filtersToSearchQuery';

const DaoExpansionFields = ['name', 'avatar', 'description', 'link_website', 'link_discord'];
@Injectable()
export class DaoJobService {
  constructor(@InjectModel(DaoJob.name) private daoJobModel: Model<DaoJobDocument>, @InjectModel(TextBlock.name) private textBlockModel: Model<TextBlockDocument>) {}

  async create(createDto: CreateDaoJobDto):  Promise<DaoJob> {
    const {text_blocks, ...createWithoutTextBlocks} = createDto;

    const createdDaoJob = new this.daoJobModel(createWithoutTextBlocks);
    await createdDaoJob.save();
    if(text_blocks != null) {
      const savedBlocks = await Promise.all(text_blocks.map((text_block) => {
        const textBlockModel = new this.textBlockModel({...text_block, link_back: createdDaoJob.id})
        return textBlockModel.save();
      }));
      createdDaoJob.text_blocks = savedBlocks;
      return createdDaoJob.save();
    } else {
      return createdDaoJob;
    }
  }

  async findAll(filters: [string], populate: boolean = false): Promise<DaoJob[]> {
    const query = this.daoJobModel.find(filtersToSearchQuery(filters)).populate('text_blocks');
    if(populate) {
      query.populate('dao', DaoExpansionFields);
    }
    return query.exec();
  }
  async findDaoJobs(id: string, lean: boolean = false): Promise<DaoJob[]> {
    if(lean) return this.daoJobModel.find({dao: id}).populate('dao', DaoExpansionFields).populate('text_blocks').exec();
    return this.daoJobModel.find({dao: id}).populate('text_blocks').exec();
  }
  async findOne(id: string, populate: boolean = false): Promise<DaoJob> {
    const query = this.daoJobModel.findOne({_id:id}).populate('text_blocks');
    if(populate) {
      query.populate('dao', DaoExpansionFields);
    }
    return query.exec();
  }

  async update(id: string, updateDto: UpdateDaoJobDto): Promise<DaoJob> {

    const text_blocks = updateDto.text_blocks || [];
    const updatedBlocks = await Promise.all(text_blocks.map(text_block => {
      if(text_block._id) {
        return this.textBlockModel.findByIdAndUpdate(text_block._id, text_block).exec();
      } else {
        const textBlockModel = new this.textBlockModel({...text_block, link_back: id});
        return textBlockModel.save();
      }
    }));

    return await this.daoJobModel.findByIdAndUpdate(id, {...updateDto, text_blocks: updatedBlocks}).exec();
  }

  async remove(id: string): Promise<UpdateWriteOpResult> { // <DaoJob>

    const daoJob = await this.daoJobModel.findOne({ _id:id }).exec();
    const text_blocks = daoJob.text_blocks;
    if(text_blocks) {
      await Promise.all(text_blocks.map(text_block => this.textBlockModel.find({_id: text_block}).remove().exec()));
    }
    return daoJob.deleteOne();
  }
}
