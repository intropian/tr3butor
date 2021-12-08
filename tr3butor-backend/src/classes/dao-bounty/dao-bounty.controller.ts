import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaoBountyService } from './dao-bounty.service';
import { CreateDaoBountyDto } from './dto/create-dao-bounty.dto';
import { UpdateDaoBountyDto } from './dto/update-dao-bounty.dto';
import { DaoBounty } from './entities/dao-bounty.entity';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('dao')
@Controller('dao-bounty')
export class DaoBountyController {
  constructor(private readonly daoBountyService: DaoBountyService) {}

  @Post()
  @ApiOperation({ summary: 'Create DaoBounty' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: DaoBounty,
  })
  create(@Body() createDaoBountyDto: CreateDaoBountyDto) {
    return this.daoBountyService.create(createDaoBountyDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of DaoBounties',
    type: [DaoBounty],
  })
  findAll() {
    return this.daoBountyService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found DaoBounty',
    type: DaoBounty,
  })
  findOne(@Param('id') id: string) {
    return this.daoBountyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaoBountyDto: UpdateDaoBountyDto) {
    return this.daoBountyService.update(+id, updateDaoBountyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daoBountyService.remove(+id);
  }
}
