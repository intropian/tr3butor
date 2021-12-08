import { ApiProperty } from '@nestjs/swagger';

export class CreateDaoGrantDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    guidelines: string;

    @ApiProperty({ type: () => [String] })
    requirements: [string];
    @ApiProperty()
    date_start: Date;
    @ApiProperty()
    date_end: Date;
    @ApiProperty()
    payment: string;
}
