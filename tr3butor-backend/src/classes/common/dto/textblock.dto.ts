import { ApiProperty } from '@nestjs/swagger';

export class TextBlockDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    content: string;
    @ApiProperty()
    _id?: string;

}
