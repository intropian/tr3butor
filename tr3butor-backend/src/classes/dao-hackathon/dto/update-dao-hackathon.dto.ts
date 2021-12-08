import { PartialType } from '@nestjs/mapped-types';
import { CreateDaoHackathonDto } from './create-dao-hackathon.dto';

export class UpdateDaoHackathonDto extends PartialType(CreateDaoHackathonDto) {}
