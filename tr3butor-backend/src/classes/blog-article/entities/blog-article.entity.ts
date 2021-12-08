import { ApiProperty } from '@nestjs/swagger';

export class BlogArticle {
    @ApiProperty()
    title: string;
    @ApiProperty()
    content: string;
    @ApiProperty()
    author: string;

    created_at: Date;

    @ApiProperty({ type: () => [String] })
    hash_tags: [string]
}
