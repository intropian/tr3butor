import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaoHackathonService } from './dao-hackathon.service';
import { CreateDaoHackathonDto } from './dto/create-dao-hackathon.dto';
import { UpdateDaoHackathonDto } from './dto/update-dao-hackathon.dto';
import { DaoHackathon } from './entities/dao-hackathon.entity';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('dao')
@Controller('dao-hackathon')
export class DaoHackathonController {
  constructor(private readonly daoHackathonService: DaoHackathonService) {}

  @Post()
  @ApiOperation({ summary: 'Create DaoHackathon' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: DaoHackathon,
  })
  create(@Body() createDaoHackathonDto: CreateDaoHackathonDto) {
    return this.daoHackathonService.create(createDaoHackathonDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of DaoHackathons',
    type: [DaoHackathon],
  })
  findAll() {
    return this.daoHackathonService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found DaoHackathon',
    type: DaoHackathon,
  })
  findOne(@Param('id') id: string) {
    return this.daoHackathonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaoHackathonDto: UpdateDaoHackathonDto) {
    return this.daoHackathonService.update(+id, updateDaoHackathonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daoHackathonService.remove(+id);
  }
}
