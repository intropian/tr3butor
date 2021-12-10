import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    login: string;
    @ApiProperty()
    password: string;
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
