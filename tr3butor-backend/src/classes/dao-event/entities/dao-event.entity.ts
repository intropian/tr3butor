import { ApiProperty } from '@nestjs/swagger';

export class DaoEvent {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    date_start: Date;
    @ApiProperty()
    price: number;
}
