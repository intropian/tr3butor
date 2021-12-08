import { ApiProperty } from '@nestjs/swagger';

export class Talent {
    @ApiProperty()
    nickname: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    experience: string;

    @ApiProperty({ type: () => [String] })
    skills: [string];

    @ApiProperty({ type: () => [String] })
    preferences: [string];
    @ApiProperty()
    time_availability: string;
    @ApiProperty()
    eth_wallet: string;
}
