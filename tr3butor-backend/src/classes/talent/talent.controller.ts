import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TalentService } from './talent.service';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';
import { Talent } from './entities/talent.entity';
import {
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('user')
@Controller('talent')
export class TalentController {
  constructor(private readonly talentService: TalentService) {}

  @Post()
  @ApiOperation({ summary: 'Create Talent' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Talent,
  })
  create(@Body() createTalentDto: CreateTalentDto) {
    return this.talentService.create(createTalentDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of Talent',
    type: [Talent],
  })
  findAll() {
    return this.talentService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found Talent',
    type: Talent,
  })
  findOne(@Param('id') id: string) {
    return this.talentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTalentDto: UpdateTalentDto) {
    return this.talentService.update(+id, updateTalentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talentService.remove(+id);
  }
}
