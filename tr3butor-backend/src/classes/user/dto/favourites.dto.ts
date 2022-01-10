import { ApiProperty } from '@nestjs/swagger';
export class AddFavouritesDto {
    @ApiProperty()
    favourites_ids: [string];
}
export class RemoveFavouritesDto {
    @ApiProperty()
    favourites_ids: [string];
}
