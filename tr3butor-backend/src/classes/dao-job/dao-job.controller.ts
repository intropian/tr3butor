import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DaoJobService } from './dao-job.service';
import { CreateDaoJobDto } from './dto/create-dao-job.dto';
import { UpdateDaoJobDto } from './dto/update-dao-job.dto';
import { DaoJob } from './entities/dao-job.entity';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('dao')
@Controller('dao-job')
export class DaoJobController {
  constructor(private readonly daoJobService: DaoJobService) {}

  @Post()
  @ApiOperation({ summary: 'Create DaoJob' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: DaoJob,
  })
  create(@Body() createDaoJobDto: CreateDaoJobDto) {
    return this.daoJobService.create(createDaoJobDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get list of DaoJobs' })
  @ApiOkResponse({
    description: 'List of DaoJobs',
    type: [DaoJob],
  })
  findAll(@Query() query) {
    return this.daoJobService.findAll(query && query.filter, query && query.populate);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found DaoJob',
    type: DaoJob,
  })
  findOne(@Param('id') id: string, @Query() query) {
    return this.daoJobService.findOne(id, query && query.populate);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaoJobDto: UpdateDaoJobDto) {
    return this.daoJobService.update(id, updateDaoJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daoJobService.remove(id);
  }
}
