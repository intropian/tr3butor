import { ApiProperty } from '@nestjs/swagger';

export class Dao {
    @ApiProperty()
    name: string;
    @ApiProperty()
    eth_address: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    admin_id: string; // what should it be?

    @ApiProperty()
    avatar: string;
    @ApiProperty()
    color: string;
    @ApiProperty()
    tags: string;
    @ApiProperty()
    date_founded: string;
    @ApiProperty({ type: () => [String] })
    contributors: [string];
    @ApiProperty()
    metric_mcap: string;
    @ApiProperty()
    metric_tvl: string;
    @ApiProperty()
    metric_volume: string;
    @ApiProperty()
    link_website: string;
    @ApiProperty()
    link_telegram: string;
    @ApiProperty()
    link_twitter: string;
    @ApiProperty()
    link_reddit: string;
    @ApiProperty()
    link_discord: string;

    @ApiProperty()
    text_blocks: [{title: string, content: string}]

    @ApiProperty()
    favourited_users_count: number;
}
