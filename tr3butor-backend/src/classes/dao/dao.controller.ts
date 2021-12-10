import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DaoService } from './dao.service';
import { DaoJobService } from '../dao-job/dao-job.service';
import { CreateDaoDto } from './dto/create-dao.dto';
import { UpdateDaoDto } from './dto/update-dao.dto';
import { Dao } from './entities/dao.entity';
import {DaoJob} from '../dao-job/entities/dao-job.entity';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('dao')
@Controller('dao')
export class DaoController {
  constructor(private readonly daoService: DaoService, private readonly daoJobService: DaoJobService) {}

  @Post()
  @ApiOperation({ summary: 'Create Dao' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Dao,
  })
  create(@Body() createDaoDto: CreateDaoDto) {
    return this.daoService.create(createDaoDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of DAOs',
    type: [Dao],
  })
  async findAll(@Query() query) {
    return await this.daoService.findAll(query && query.filter);
  }
  @Get(':id/jobs')
  @ApiOkResponse({
    description: 'List of DAO jobs',
    type: [DaoJob],
  })
  async findDaoJobs(@Param('id') id: string) {

    // yes, i know two awaits should be combined into Promise.all, we'll do on next iteration
    const dao = await this.daoService.findOne(id, true);
    const jobs = await this.daoJobService.findDaoJobs(id, true);
    return jobs.map(job => ({...job, dao_name: dao.name, dao_avatar: dao.avatar}));
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found DAO ',
    type: Dao,
  })
  findOne(@Param('id') id: string) {
    return this.daoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaoDto: UpdateDaoDto) {
    return this.daoService.update(id, updateDaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daoService.remove(id);
  }
}
