import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaoTemplateService } from './dao-template.service';
import { CreateDaoTemplateDto } from './dto/create-dao-template.dto';
import { UpdateDaoTemplateDto } from './dto/update-dao-template.dto';
import { DaoTemplate } from './entities/dao-template.entity';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('dao')
@Controller('dao-template')
export class DaoTemplateController {
  constructor(private readonly daoTemplateService: DaoTemplateService) {}

  @Post()
  @ApiOperation({ summary: 'Create DaoTemplate' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: DaoTemplate,
  })
  create(@Body() createDaoTemplateDto: CreateDaoTemplateDto) {
    return this.daoTemplateService.create(createDaoTemplateDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of DaoTemplates',
    type: [DaoTemplate],
  })
  findAll() {
    return this.daoTemplateService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found DaoTemplate',
    type: DaoTemplate,
  })
  findOne(@Param('id') id: string) {
    return this.daoTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaoTemplateDto: UpdateDaoTemplateDto) {
    return this.daoTemplateService.update(+id, updateDaoTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daoTemplateService.remove(+id);
  }
}
