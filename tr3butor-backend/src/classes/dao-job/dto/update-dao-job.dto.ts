import { OmitType } from '@nestjs/mapped-types';
import { CreateDaoJobDto } from './create-dao-job.dto';

export class UpdateDaoJobDto extends OmitType(CreateDaoJobDto, ['dao'] as const) {
}
