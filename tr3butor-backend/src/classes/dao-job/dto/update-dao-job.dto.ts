import { PartialType } from '@nestjs/mapped-types';
import { CreateDaoJobDto } from './create-dao-job.dto';

export class UpdateDaoJobDto extends PartialType(CreateDaoJobDto) {
}
