import { PartialType } from '@nestjs/mapped-types';
import { CreateDaoEventDto } from './create-dao-event.dto';

export class UpdateDaoEventDto extends PartialType(CreateDaoEventDto) {
}
