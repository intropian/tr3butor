import { PartialType } from '@nestjs/mapped-types';
import { CreateDaoQuestDto } from './create-dao-quest.dto';

export class UpdateDaoQuestDto extends PartialType(CreateDaoQuestDto) {
}
