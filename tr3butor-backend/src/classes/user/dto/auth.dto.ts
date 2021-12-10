import { ApiProperty } from '@nestjs/swagger';

export class AuthRequestDto {
    @ApiProperty()
    public_addr: string;
}

export class AuthResponseDto {
    @ApiProperty()
    nonce: string;
}

export class AuthConfirmDto {
    @ApiProperty()
    public_addr: string;
    @ApiProperty()
    signed_nonce: string;
}
