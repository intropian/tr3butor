import { ApiProperty } from '@nestjs/swagger';

export class DaoHackathon {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;

    @ApiProperty({ type: () => [String] })
    requirements: [string];
    @ApiProperty()
    date_start: Date;
    @ApiProperty()
    date_end: Date;
    @ApiProperty()
    location: string;
    @ApiProperty()
    payment: string;
}
