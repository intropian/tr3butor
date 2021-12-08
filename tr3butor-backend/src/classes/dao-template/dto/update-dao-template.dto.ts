import { PartialType } from '@nestjs/mapped-types';
import { CreateDaoTemplateDto } from './create-dao-template.dto';

export class UpdateDaoTemplateDto extends PartialType(CreateDaoTemplateDto) {
}
