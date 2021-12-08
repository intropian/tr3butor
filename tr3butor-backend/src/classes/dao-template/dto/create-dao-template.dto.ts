import { ApiProperty } from '@nestjs/swagger';

export class CreateDaoTemplateDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    content: string;
    @ApiProperty()
    author: string;

    @ApiProperty({ type: () => [String] })
    hash_tags: [string];
}
