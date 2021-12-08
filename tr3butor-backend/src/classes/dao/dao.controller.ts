import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaoService } from './dao.service';
import { CreateDaoDto } from './dto/create-dao.dto';
import { UpdateDaoDto } from './dto/update-dao.dto';
import { Dao } from './entities/dao.entity';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('dao')
@Controller('dao')
export class DaoController {
  constructor(private readonly daoService: DaoService) {}

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
  async findAll() {
    return await this.daoService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found DAO ',
    type: Dao,
  })
  findOne(@Param('id') id: string) {
    return this.daoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaoDto: UpdateDaoDto) {
    return this.daoService.update(+id, updateDaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daoService.remove(+id);
  }
}
