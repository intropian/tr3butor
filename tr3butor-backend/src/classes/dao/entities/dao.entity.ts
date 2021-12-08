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
    mission: string;
    @ApiProperty()
    culture_values: string;
    @ApiProperty()
    history: string;

    @ApiProperty({ type: () => [String] })
    core_team: [string];

    @ApiProperty({ type: () => [String] })
    benefits: [string];

}
