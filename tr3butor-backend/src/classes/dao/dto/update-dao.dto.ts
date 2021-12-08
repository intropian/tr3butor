import { PartialType } from '@nestjs/mapped-types';
import { CreateDaoDto } from './create-dao.dto';

export class UpdateDaoDto extends PartialType(CreateDaoDto) {
}
