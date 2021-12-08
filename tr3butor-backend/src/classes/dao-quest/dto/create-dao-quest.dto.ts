import { ApiProperty } from '@nestjs/swagger';

export class CreateDaoQuestDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    date_start: Date;
    @ApiProperty()
    date_end: Date;
    @ApiProperty()
    payment: string;

    @ApiProperty({ type: () => [String] })
    requirements: [string];
    @ApiProperty()
    time_length: string; // may be enum
}
