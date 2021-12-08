import { ApiProperty } from '@nestjs/swagger';

export class CreateDaoBountyDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    acceptance_criteria: string;
    @ApiProperty()
    date_start: Date;
    @ApiProperty()
    time_lenght: string; // may be enum
    @ApiProperty()
    payment: string;
}
