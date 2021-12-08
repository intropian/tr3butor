import { ApiProperty } from '@nestjs/swagger';

export class CreateDaoJobDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;

    @ApiProperty({ type: () => [String] })
    requirements: [string];

    @ApiProperty({ type: () => [String] })
    hard_skills: [string];

    @ApiProperty({ type: () => [String] })
    soft_skills: [string];
    @ApiProperty()
    experience: string;
    @ApiProperty()
    education: string;
    @ApiProperty()
    location: string;
    @ApiProperty()
    timezone: string;
    @ApiProperty()
    payment: string;
    @ApiProperty()
    time_length: string; // may be enum
}
