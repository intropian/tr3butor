import { ApiProperty } from '@nestjs/swagger';

export class User {
    @ApiProperty()
    login: string;
    @ApiProperty()
    password: string; // hash
    @ApiProperty()
    name: string;
    @ApiProperty()
    created_at: Date;
    last_login: Date;
    @ApiProperty()
    email: string;
    @ApiProperty()
    twitter_handle: string;
    @ApiProperty()
    eth_handle: string;
    @ApiProperty()
    public_addr: string;

    nonce: string;
}
