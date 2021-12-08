import { PartialType } from '@nestjs/mapped-types';
import { CreateDaoBountyDto } from './create-dao-bounty.dto';

export class UpdateDaoBountyDto extends PartialType(CreateDaoBountyDto) {
}
