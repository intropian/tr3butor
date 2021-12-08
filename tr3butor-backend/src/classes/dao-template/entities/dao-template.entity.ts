import { ApiProperty } from '@nestjs/swagger';

export class DaoTemplate {
    @ApiProperty()
    title: string;
    @ApiProperty()
    content: string;
    @ApiProperty()
    author: string;

    created_at: Date;

    @ApiProperty({ type: () => [String] })
    hash_tags: [string];

}
