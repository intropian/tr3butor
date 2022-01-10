import { ApiProperty } from '@nestjs/swagger';
import { Dao } from '../../dao/entities/dao.entity';

export class FavouriteDaos {
    @ApiProperty()
    favourite_daos: Dao;
}
