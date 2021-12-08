import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaoEventService } from './dao-event.service';
import { CreateDaoEventDto } from './dto/create-dao-event.dto';
import { UpdateDaoEventDto } from './dto/update-dao-event.dto';
import { DaoEvent } from './entities/dao-event.entity';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('dao')
@Controller('dao-event')
export class DaoEventController {
  constructor(private readonly daoEventService: DaoEventService) {}

  @Post()
  @ApiOperation({ summary: 'Create DaoEvent' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: DaoEvent,
  })
  create(@Body() createDaoEventDto: CreateDaoEventDto) {
    return this.daoEventService.create(createDaoEventDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of DaoEvents',
    type: [DaoEvent],
  })
  findAll() {
    return this.daoEventService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found DaoEvent',
    type: DaoEvent,
  })
  findOne(@Param('id') id: string) {
    return this.daoEventService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaoEventDto: UpdateDaoEventDto) {
    return this.daoEventService.update(+id, updateDaoEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daoEventService.remove(+id);
  }
}
