import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaoGrantService } from './dao-grant.service';
import { CreateDaoGrantDto } from './dto/create-dao-grant.dto';
import { UpdateDaoGrantDto } from './dto/update-dao-grant.dto';
import { DaoGrant } from './entities/dao-grant.entity';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('dao')
@Controller('dao-grant')
export class DaoGrantController {
  constructor(private readonly daoGrantService: DaoGrantService) {}

  @Post()
  @ApiOperation({ summary: 'Create DaoGrant' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: DaoGrant,
  })
  create(@Body() createDaoGrantDto: CreateDaoGrantDto) {
    return this.daoGrantService.create(createDaoGrantDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of DaoGrants',
    type: [DaoGrant],
  })
  findAll() {
    return this.daoGrantService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found DaoGrant',
    type: DaoGrant,
  })
  findOne(@Param('id') id: string) {
    return this.daoGrantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaoGrantDto: UpdateDaoGrantDto) {
    return this.daoGrantService.update(+id, updateDaoGrantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daoGrantService.remove(+id);
  }
}
