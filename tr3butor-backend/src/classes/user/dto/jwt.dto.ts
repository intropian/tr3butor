import { ApiProperty } from '@nestjs/swagger';

export class JWTDto {
    @ApiProperty()
    accessToken: string;
    @ApiProperty()
    expiresIn: string;
}
