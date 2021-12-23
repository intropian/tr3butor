import { ApiProperty } from '@nestjs/swagger';

export class ReadUserDto {
    @ApiProperty()
    login: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    twitter_handle: string;
    @ApiProperty()
    eth_handle: string;
    @ApiProperty()
    public_addr: string;
}
