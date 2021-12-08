import { PartialType } from '@nestjs/mapped-types';
import { CreateDaoGrantDto } from './create-dao-grant.dto';

export class UpdateDaoGrantDto extends PartialType(CreateDaoGrantDto) {
}
