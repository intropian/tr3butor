import { ApiProperty } from '@nestjs/swagger';

export class JWTDto {
    @ApiProperty()
    accessToken: string;
    @ApiProperty()
    refreshToken?: string;
    @ApiProperty()
    expiresIn: string;
}
