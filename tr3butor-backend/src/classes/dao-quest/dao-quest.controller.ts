import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaoQuestService } from './dao-quest.service';
import { CreateDaoQuestDto } from './dto/create-dao-quest.dto';
import { UpdateDaoQuestDto } from './dto/update-dao-quest.dto';
import { DaoQuest } from './entities/dao-quest.entity';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('dao')
@Controller('dao-quest')
export class DaoQuestController {
  constructor(private readonly daoQuestService: DaoQuestService) {}

  @Post()
  @ApiOperation({ summary: 'Create DaoQuest' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: DaoQuest,
  })
  create(@Body() createDaoQuestDto: CreateDaoQuestDto) {
    return this.daoQuestService.create(createDaoQuestDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of DaoQuests',
    type: [DaoQuest],
  })
  findAll() {
    return this.daoQuestService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found DaoQuest',
    type: DaoQuest,
  })
  findOne(@Param('id') id: string) {
    return this.daoQuestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaoQuestDto: UpdateDaoQuestDto) {
    return this.daoQuestService.update(+id, updateDaoQuestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daoQuestService.remove(+id);
  }
}
