import { ApiProperty } from '@nestjs/swagger';

export class CreateDaoEventDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    date_start: Date;
    @ApiProperty()
    price: number;
}
